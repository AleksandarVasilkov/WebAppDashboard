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
  badge.style.display = 'none'; 
}


function closeAlertBanner() {
  var alertBanner = document.getElementById("alertBanner");
  alertBanner.style.display = "none";
}


window.addEventListener('load', function() {
    var ctx = document.getElementById('traffic-chart').getContext('2d');

    
    var datasets = {
        hourly: {
            data: [750, 425, 1000, 1650, 1500, 1750, 845, 1850, 955, 1500, 2500],
            fill: 'origin', 
            backgroundColor: 'rgba(213, 214, 236, .3)', 
            borderColor: 'magenta', 
            borderWidth: 1, 
            tension: 0.4 
        },
        daily: {
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            fill: 'origin', 
            backgroundColor: 'rgba(213, 214, 236, .3)', 
            borderColor: 'mediumslateblue', 
            borderWidth: 1, 
            tension: 0.4 
        },
        weekly: {
            data: [18000, 21500, 24000, 37500, 36000, 32300, 17500, 44400, 58000, 36000, 45000],
            fill: 'origin', 
            backgroundColor: 'rgba(213, 214, 236, .3)', 
            borderColor: 'royalblue', 
            borderWidth: 1, 
            tension: 0.4 
        },
        monthly: {
            data: [126000, 19500, 168000, 336000, 245000, 294000, 210000, 310800, 378000, 252000, 455000],
            fill: 'origin', 
            backgroundColor: 'rgba(213, 214, 236, .3)', 
            borderColor: 'mistyrose', 
            borderWidth: 1, 
            tension: 0.4 
        }
    };

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: [datasets['hourly']] 
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true 
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

    
    
    
    var links = document.querySelectorAll('.traffic-nav-link');
    var selectedLink = links[0]; 
    selectedLink.classList.add('selected');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            
            var interval = this.textContent.toLowerCase();
            
            
            myChart.data.datasets[0] = datasets[interval];
            myChart.update();

            
            selectedLink.classList.remove('selected');
            this.classList.add('selected');
            selectedLink = this;
        });
    }
});

var links = document.querySelectorAll('.traffic-nav-link');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        
        links.forEach(function(link) {
            link.classList.remove('selected');
        });

        
        this.classList.add('selected');
    });
});

// bar chart:
var ctxDaily = document.getElementById('daily-chart').getContext('2d');

var dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        data: [75, 110, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderColor: '#7477BF',
        borderWidth: 1
    }]
};

var myDailyChart = new Chart(ctxDaily, {
    type: 'bar',
    data: dailyData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


var ctxMobile = document.getElementById('mobile-chart').getContext('2d');

var mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        data: [70, 15, 15],
        backgroundColor: ['#7477BF', '#81C98F', '#51B6C8'],
        borderColor: ['#7477BF', '#81C98F', '#51B6C8'],
        borderWidth: 1
    }]
};

var myMobileChart = new Chart(ctxMobile, {
    type: 'doughnut',
    data: mobileData,
    options: {
        responsive: true,
        
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            }
        }
    }
});


const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");



send.addEventListener('click', () => {
    
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
        user.value = "";  
        message.value = "";  
    }
    
});



var names = ["Victoria", "Dan", "Dawn", "Dale"];
var lastKeyWasBackspace = false;

document.getElementById("userField").addEventListener("keydown", function(e) {
    lastKeyWasBackspace = e.key === 'Backspace';
});

document.getElementById("userField").addEventListener("input", function(e) {
    if (!lastKeyWasBackspace) {
        var input = e.target;
        var current = input.value;
        var match = names.find(name => name.toUpperCase().startsWith(current.toUpperCase()));

        if (match) {
            input.value = match;
            input.setSelectionRange(current.length, match.length);
        }
    }
});

user.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault(); 
        user.setSelectionRange(user.value.length, user.value.length); 
    }
});


window.addEventListener('load', function() {
    
    var sendEmail = JSON.parse(localStorage.getItem('sendEmail')) || true;
    var setPublicProfile = JSON.parse(localStorage.getItem('setPublicProfile')) || true;
    var timezone = localStorage.getItem('timezone') || "Select a Timezone";

    
    document.getElementById('input-toggle1').checked = sendEmail;
    document.getElementById('input-toggle2').checked = setPublicProfile;
    document.getElementById('timezone').value = timezone;
});

document.getElementById('input-toggle1').addEventListener('change', function() {
    localStorage.setItem('sendEmail', JSON.stringify(this.checked));
});

document.getElementById('input-toggle2').addEventListener('change', function() {
    localStorage.setItem('setPublicProfile', JSON.stringify(this.checked));
});

document.getElementById('timezone').addEventListener('change', function() {
    localStorage.setItem('timezone', this.value);
});

document.getElementById('cancel').addEventListener('click', resetSettings);

function resetSettings() {
    
    document.getElementById('input-toggle1').checked = false;
    document.getElementById('input-toggle2').checked = false;

    
    document.getElementById('timezone').value = "Select a Timezone";

    // Clear local storage
    localStorage.removeItem('sendEmail');
    localStorage.removeItem('setPublicProfile');
    localStorage.removeItem('timezone');
}

