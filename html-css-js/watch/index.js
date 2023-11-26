setInterval(updateTimer,1000);

function updateTimer(){
    const time = new Date();
    const hours = String(time.getHours()).padStart(2,'0');
    const minutes = String(time.getMinutes()).padStart(2,'0');
    const seconds = String(time.getSeconds()).padStart(2,'0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateTimer();