// DEFINING startButtonClick() function.

function startButtonClick(){} //empty for now

// DEFINING stopButtonClick() function.

function stopButtonclick(){} //empty for now

//----------BLAST OFF START / COUNTDOWN FUNCTION DEFINING-----------------------------------

function runTimer(countDownStart){ //The countDownStart varaible is defined in index.html
currTime = 50;
var timeOut = 5000;

//The settimeout function is the JavaScript built in function to delay the page rendering too fast.
setTimeout(function(){
    countDownStart.innerHTML = currTime
    currTime = currTime-5;
}, timeOut);
timeOut = timeOut + 5000;

setTimeout(function(){
    countDownStart.innerHTML = currTime //Copy and Pasting the setTimeout Function and subtracting currTime by 5 until it reaches 0
    currTime = currTime-5;
}, timeOut);
timeOut = timeOut + 5000;

setTimeout(function(){
    countDownStart.innerHTML = currTime 
    currTime = currTime-5;
}, timeOut);
timeOut = timeOut + 5000;

setTimeout(function(){
    countDownStart.innerHTML = currTime 
    currTime = currTime-5;
}, timeOut);
timeOut = timeOut + 5000;

setTimeout(function(){
    countDownStart.innerHTML = currTime 
    currTime = currTime-5;
}, timeOut);
timeOut = timeOut + 5000;

setTimeout(function(){
    countDownStart.innerHTML = currTime 
    currTime = currTime-5;
}, timeOut);
timeOut = timeOut + 5000;

setTimeout(function(){
    countDownStart.innerHTML = currTime 
    currTime = currTime-5;
}, timeOut);

setTimeout(function(){
    countDownStart.innerHTML = currTime 
    currTime = currTime-5;
}, timeOut);
timeOut = timeOut + 5000;

setTimeout(function(){
    countDownStart.innerHTML = currTime 
    currTime = currTime-5;
}, timeOut);
timeOut = timeOut + 5000;

setTimeout(function(){
    countDownStart.innerHTML = currTime 
    currTime = currTime-5;
}, timeOut);
timeOut = timeOut + 5000;
timeOut = timeOut + 5000;

setTimeout(function(){   //Countdown over!!!!!
    countDownStart.innerHTML = currTime 
    alert("PACHOOOOOOO!!!!!!!! Blastoff!!!");
}, timeOut);


}
