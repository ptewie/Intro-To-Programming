function getUserInput(nameElement){ //Getting the User's Name. 
    //do while function 
    do {
        firstname = prompt("Hello! Please enter your first name (under 20 characters): ");  
        lastname = prompt("Please enter your last name (under 20 characters):  ");

        fullname = firstname + " " + lastname; //Defining the full name
        //Checking to see if the name has more than 20 characters, alert shows if true
        if (fullname.length > 20){
            alert ("WARNING: " + fullname.length + " is too many characters in your name! Please resubmit.") 
        }

    } while (fullname.length > 20); //If name is greater then 15 characters, loop runs again


    //Asking for the
    
    bnumber = 0 //defualt value of badge number

    do {
        bnumber = prompt("Please enter your badge number: (3 digits max)")
        if (bnumber > 999){
            alert("Error, more than 3 digits used, please retry.")
        }
    } while (bnumber > 999);
    alert("Credentials confirmed! Logging you in!")

    nameElement.innerHTML = fullname + " ID: " + bnumber;

} 



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

// Example for Counter Loop that decreases by 1
/*   for(counter=10, counter < 0; counter--){  
        alert(alertText + "minus" + counter);
    }
*/

/* OLD function runTimer Function
function runTimer(countDownStart){ //The countDownStart varaible is defined in index.html
*/


function runTimer(countDownStart){
    currTime = 50;
    var timeOut = 5000;
    for (counter = 0; counter < 10; counter++){
        setTimeout(function(){ //Basically a nested function
            currTime = currTime-5; // Creating Delay when loading up page

            if (currTime < 25){  // changed < to >, creating logic error. 
                countDownStart.innerHTML = "Warning Less than ½ way to launch, time left = " + currTime // Adding text before countdown
            }
            else   {
                countDownStart.innerHTML = currTime  
                
            }

            if (currTime == 0){
                countDownStart.innerHTML = "Pachooo!!!! Blast off!"
            }
            
            
            }    , timeOut); // Set timemout on line 33, the setTimeout function is being called, as a paramater to the function, we're creating a paramater
                             // timeOut is the secound argument, it's asking "what is the delay."
        timeOut = timeOut + 5000; //
        }
    } 
