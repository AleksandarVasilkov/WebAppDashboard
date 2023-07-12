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

    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            fill: 'origin', // fill area under the line
            backgroundColor: 'rgba(213, 214, 236, .3)', // new color of the area under the line
            borderColor: 'rgba(100, 100, 100, 1)', // new color of the line
            borderWidth: 1, // width of the line
            tension: 0.4 // makes the line curved
        }]
    };

    var myChart = new Chart(ctx, {
        type: 'line',
        data: trafficData,
        options: {
            scales: {
                y: {
                    beginAtZero: true // start y-axis at 0
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}








// document.querySelector('.closebtn').addEventListener('click', function() {
//     this.parentElement.style.display = 'none';
// });

// const alertBanner = document.getElementById("alert");
// // create the html for the banner
// alertBanner.innerHTML =
// `<div>
// <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
// to complete</p>
// <p class="closebtn">x</p>
// </div>`

// alertBanner.addEventListener('click', e => {
//     const element = e.target;
//     if (element.classList.contains("closebtn")) {
//         alertBanner.style.display = "none"
//     }
// });


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
