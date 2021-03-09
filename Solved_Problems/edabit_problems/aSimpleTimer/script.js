function simpleTimer(seconds) {
    var minutes = 0;
    if (seconds >= 60) {
        minutes = Math.trunc(seconds / 60);
        seconds = seconds % 60;
    }
    var hours = 0;
    if (minutes >= 60) {
        hours = Math.trunc(minutes / 60);
        minutes = minutes % 60;
    }
    if (seconds < 10)
        seconds = "0" + seconds;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (hours < 10)
        hours = "0" + hours;
    return hours + ":" + minutes + ":" + seconds;
}

console.log(simpleTimer(0));
console.log(simpleTimer(59));
console.log(simpleTimer(60));
console.log(simpleTimer(3599));