// DEFINING startButtonClick() function.

function startButtonClick(){} //empty for now

// DEFINING stopButtonClick() function.

function stopButtonclick(){} //empty for now

//----------BLAST OFF START / COUNTDOWN FUNCTION DEFINING-----------------------------------

// Loop for Countdown Function
/* i is a regular variable usually, but counter variables are used so often that
   i used as an industry stand in
   I'm new so instead im going to use a more desrbitive variable name, being "counter"
*/
function displayAlert (alertText){ 
    for(counter=0; counter < 5; counter++){  //counter starts at 0, adds until counter is greater then 5, where it stops
        alert(alertText + counter);
    }
    }

// Example for Counter Loop that decreases by 1
/*   for(counter=10, counter < 0; counter--){  
        alert(alertText + "minus" + counter);
    }
*/
function runTimer(countDownStart){ //The countDownStart varaible is defined in index.html
currTime = 50;
var timeOut = 5000;



// THIS WILL EVENTUALLY BE REPLACED WITH A LOOP!!!!!!!
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
    alert("PACHOOOOOOO!!!!!!!! Blastoff!!!"); // Displaying alert for end of comment
}, timeOut);


}
