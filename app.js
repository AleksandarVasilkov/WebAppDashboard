function togglePopup() {
  var popup = document.getElementById('popupWindow');
  var badge = document.getElementById('notificationBadge');
  
  if (popup.classList.contains('hidden')) {
      popup.classList.remove('hidden');
      badge.style.display = 'inline'; // Ensure badge is displayed when popup is shown
  } else {
      popup.classList.add('hidden');
  }
}

function closePopup() {
  var popup = document.getElementById('popupWindow');
  var badge = document.getElementById('notificationBadge');

  popup.classList.add('hidden');
  badge.style.display = 'none'; // Hide badge when popup is closed
}


function closeAlertBanner() {
  var alertBanner = document.getElementById("alertBanner");
  alertBanner.style.display = "none";
}

window.onload = function() {
    var ctx = document.getElementById('traffic-chart').getContext('2d');

    // Define the datasets for different intervals
    var datasets = {
        hourly: {
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            fill: 'origin', // fill area under the line
            backgroundColor: 'rgba(213, 214, 236, .3)', // new color of the area under the line
            borderColor: 'rgba(100, 100, 100, 1)', // new color of the line
            borderWidth: 1, // width of the line
            tension: 0.4 // makes the line curved
        },
        daily: {
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            fill: 'origin', // fill area under the line
            backgroundColor: 'rgba(213, 214, 236, .3)', // new color of the area under the line
            borderColor: 'rgba(100, 100, 100, 1)', // new color of the line
            borderWidth: 1, // width of the line
            tension: 0.4 // makes the line curved
        },
        weekly: {
            data: [18000, 30000, 24000, 48000, 36000, 42000, 30000, 44400, 54000, 36000, 60000],
            fill: 'origin', // fill area under the line
            backgroundColor: 'rgba(213, 214, 236, .3)', // new color of the area under the line
            borderColor: 'rgba(100, 100, 100, 1)', // new color of the line
            borderWidth: 1, // width of the line
            tension: 0.4 // makes the line curved
        },
        monthly: {
            data: [126000, 210000, 168000, 336000, 252000, 294000, 210000, 310800, 378000, 252000, 420000],
            fill: 'origin', // fill area under the line
            backgroundColor: 'rgba(213, 214, 236, .3)', // new color of the area under the line
            borderColor: 'rgba(100, 100, 100, 1)', // new color of the line
            borderWidth: 1, // width of the line
            tension: 0.4 // makes the line curved
        }
    };

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: [datasets['hourly']] // Start with hourly data
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // start y-axis at 0
                },
                x: {
                    ticks: {
                        autoSkip: false,
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Add click event listeners to the LIs
    var links = document.querySelectorAll('.traffic-nav-link');
    var selectedLink = links[0]; // Start with the first link as selected
    selectedLink.classList.add('selected');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            // Get the interval from the clicked LI's text content
            var interval = this.textContent.toLowerCase();
            
            // Replace the chart's dataset with the new one and update the chart
            myChart.data.datasets[0] = datasets[interval];
            myChart.update();

            // Update the selected link
            selectedLink.classList.remove('selected');
            this.classList.add('selected');
            selectedLink = this;
        });
    }
};

var links = document.querySelectorAll('.traffic-nav-link');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        // Remove the 'selected' class from all links
        links.forEach(function(link) {
            link.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked link
        this.classList.add('selected');
    });
});

// bar chart:
var ctxDaily = document.getElementById('daily-chart').getContext('2d');

var dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        data: [1200, 1900, 3000, 5000, 2000, 3000, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

var myDailyChart = new Chart(ctxDaily, {
    type: 'bar',
    data: dailyData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// // Create variables to store the form fields.
// const user = document.getElementById("userField");
// const message = document.getElementById("messageField");
// const send = document.getElementById("send");

// // Create a click event listener on send
// send.addEventListener('click', () => {
//     // ensure user and message fields are filled out
//     if (user.value === "" && message.value === "") {
//         alert("Please fill out user and message fields before sending");
//     } else if (user.value === "" ) {
//         alert("Please fill out user field before sending");
//     } else if (message.value === "" ) {
//         alert("Please fill out message field before sending");
//     } else {
//         alert(`Message successfully sent to: ${user.value}`);
//     }
// });
