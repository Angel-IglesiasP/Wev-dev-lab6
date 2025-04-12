/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelName = "XYZ";
let duration = 0;

// INSERT YOUR CODE HERE

function recalculate(){/* reate a function called recalculate()*/
    let costLabel = document.getElementById("calculated-cost"); /*create a variable to represent the calculated-cost span element.*/
    let totalCost = 0; 
    if (modelName === "XYZ") { /*check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.*/
        totalCost = duration * 100;
      } else if (modelName === "CPRG") {
        totalCost = duration * 213;
      }
      costLabel.innerHTML = totalCost.toFixed(2); /*set the value of the calculated-cost element's innerHTML to this new value*/
}

/****************** model button logic ******************/

// INSERT YOUR CODE HERE
let modelButton = document.getElementById("model-button");/*first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)*/

function changeModel(){ /*second, create a function called changeModel() which checks the value of the model name variable. This function will:*/

    let modelText = document.getElementById("model-text"); /*create a variable to represent the model-text span element*/

    if (modelName === "XYZ"){ /*if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"*/
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    }else {/* if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"*/
        modelName = "XYZ";
        modelText.innerHTML = "XYZ";
    }

    recalculate()/*recalculate() the total cost. */
}
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/

// INSERT YOUR CODE HERE
let durationButton = document.getElementById("duration-button");/*first, create a variable to represent the "Change Duration" pseudo-button.*/

function changeDuration() { /*create a function called changeDuration() that will*/

    let durationText = document.getElementById("duration-text");/*create a variable to represent the duration-text span element*/

    let userImput = prompt("How many days do you want to rent?: ");/*prompt() the user for a new duration*/

    duration = userImput;/*save the result of the prompt() to the duration variable*/

    durationText.innerHTML = duration; /*change the innerHTML of the duration-text span element to this new value*/
    
    recalculate() /*recalculate() the total cost/ */
}
durationButton.addEventListener("click", changeDuration); /*finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked. */

