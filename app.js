function togglePopup() {
  var popup = document.getElementById('popupWindow');
  var badge = document.getElementById('notificationBadge');
  
  if (popup.classList.contains('hidden')) {
      popup.classList.remove('hidden');
      badge.style.display = 'inline'; 
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





document.querySelector('.closebtn').addEventListener('click', function() {
    this.parentElement.style.display = 'none';
});




    var ctx = document.getElementById('traffic-chart').getContext('2d');

    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: 'rgba(116, 119, 191, .3)', // color of the area under the line
            borderColor: 'rgba(75, 192, 192, 1)', // color of the line
            borderWidth: 1 // width of the line
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
            }
        }
    });
</script>


// Create variables to store the form fields.
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

// Create a click event listener on send
send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});
