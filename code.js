var intervalIds = new Array(); //Telling JS that it's going to be an arry. not how many items there is in it. that's not needed.



//GETTING USER INPUT FUNCTION AND CHARACTER LIMITS

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

function startButtonClick(){
    document.getElementById("btnStart").disabled = true; //Making it so when you click start, it disables it and enables
    document.getElementById("btnStop").disabled = false; //the ability to click stop
    let countDownStart = document.getElementById("DisplayCountdown"); 
    runTimer(countDownStart);  //Tim,er starts when button is clicked
} 

// DEFINING stopButtonClick() function.

function stopButtonClick(){
    document.getElementById("btnStart").disabled = false; //opposite of sister function above
    document.getElementById("btnStop").disabled = true;

    for (counter = 0; counter < 10; counter++){
        clearTimeout(intervalIds[counter]); //Stops countdown when clicked
    }


} //empty for now

//----------BLAST OFF START / COUNTDOWN FUNCTION DEFINING-----------------------------------

function runTimer(countDownStart){
    currTime = 50;
    var timeOut = 5000;
    for (counter = 0; counter < 10; counter++){
        intervalIds[counter] = setTimeout(function(){ //Basically a nested function
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
