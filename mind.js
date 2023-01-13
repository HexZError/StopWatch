console.log("Connected");
let appendsec = document.getElementById('sec');
let appendtens = document.getElementById('tens');
let appendmin = document.getElementById('min');
let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
let btnResat = document.getElementById('resat');
var IntervalID = null;
let tens = 0;
let sec = 0;
let min = 0;
console.log(IntervalID);

function setTimer(){
    tens++;
    if(tens < 9){
        appendtens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendtens.innerHTML = tens;
    }
    if(tens > 99){
        sec++;
        appendsec.innerHTML = "0" + sec;
        tens = 0;
        appendtens.innerHTML = "0" + 0;
    }
    if(sec > 9){
        appendsec.innerHTML = sec;
    }
    if(sec > 59){
        min++;
        appendmin.innerHTML =  "0" + min;
        sec = 0;
        appendsec.innerHTML = "0" + 0;
    }
    if(min > 59){
        appendmin.innerHTML = min;

    }
}

btnStart.onclick = function(){
        IntervalID = setInterval(setTimer);
        console.log(IntervalID,10000);
}
btnStop.onclick = function(){
    clearInterval(IntervalID);
}
btnResat.onclick = function(){
    tens = 0;
    sec = 0;
    min = 0;
    appendsec.innerHTML = "0" + 0;
    appendtens.innerHTML = "0" + 0;
    appendmin.innerHTML = "0" + 0;
    clearInterval(IntervalID);
}