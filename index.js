function showTime(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let AM_PM = "AM"

    if (hours >= 12){
        if (hours > 12) hours-=12;
        AM_PM = "PM";
    }
    else if(hours == 0){
        hours = 12;
        AM_PM = "AM"
    }

    hours = hours < 10 ? "0" + hours:hours;
    minutes = minutes < 10 ? "0" + minutes:minutes;
    sec = sec < 10 ? "0" + sec: sec;


    let Time = hours + ":" + minutes + ":" + sec + " " + AM_PM;
    document.getElementById("clock").innerHTML = Time;
}

showTime();
setInterval(showTime,1000);
