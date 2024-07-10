function add (add1,add2) {
  return Number((add1 + Number(add2)).toFixed(6));
};

function subtract (subtract1, subtract2) {
     return Number((subtract1 -  Number(subtract2)).toFixed(6));
};

function multiply (multiply1, multiply2) {
        // accommodating for condition of the val2Holder 
        // being set to '' after performing a calculation
        // changing each var to number means emtpy string = 0 but 
        // this doesn't work for multiplication
        // unsure how code reaches this path only after previous calculations
        // have been carried out but not in the first instance. 
        if (multiply2 === '') { 
            return Number((multiply1 * 1).toFixed(6));
        }

    return  Number((multiply1 * Number(multiply2)).toFixed(6))
};

function divide (divide1,divide2) {
    if (divide2 === 0|| divide1 === 0 ) { 
        return "Busted";
    } else { 
       return Number((divide1 /  Number(divide2)).toFixed(6));
    };

 };

let value1; //will coresspond to 'argument1'
let operator; // will correspond to function needed to invoke
let value2; //will correspond to 'argument2'

function operate(val1,oper,val2) {
   if (oper === "+") { 
    return add(val1,val2);
} else if(oper === "-") { 
    return subtract(val1,val2) ;
} else if (oper === "*") { 
    return multiply(val1,val2);

} else if (oper === "/") { 
    return divide(val1,val2);
}

 };

 let test = operate(4,"-",5);

 console.log(test);

 // button function pseudo

 //when button pressed 
 // if display showing 0 then clear
 //enter number into display
 // store number in variable for future use

 let displayText = "0";
 let displayNum;
//  let displayValue; 

 let val1Holder;
 let val2Holder;
 let operatorHolder;


 let nine = document.querySelector(".nine");

 const display = document.querySelector(".display");
let calculator = document.querySelector(".calculator");

let isEqualsClicked = false; 

function handleClick() {
    if (!isEqualsClicked) { 

        if (typeof val1Holder !== "undefined" && typeof val2Holder === "undefined" ) { 
            val2Holder = displayNum;
            displayNum = '';
            let result = operatorHolder(val1Holder,val2Holder);
             display.textContent = result;
             val1Holder = Number(result);
             console.log(typeof result, result);
             val2Holder= '';
             console.log(typeof val1Holder, val1Holder);
         } else if (typeof val1Holder === "number" && val2Holder === "" ) {
             val2Holder = displayNum;
             displayNum = '';
             let result = operatorHolder(val1Holder,val2Holder);
             display.textContent = result;
             val1Holder = Number(result);
             console.log(typeof result, result);
             
         } 
        isEqualsClicked = true; 
    }
 }

 // after pressing equals i have 

calculator.addEventListener("click", function (event) { 

let target = event.target;


// helper function to keep common logic outside of switch cases
function updateDisplay(number) { 
    isEqualsClicked = false;

    

    if (typeof displayNum === "undefined") {  // 1st step, nothing in display
        display.textContent = number;
        displayText = display.textContent;
        displayNum = Number(displayText);
        console.log(displayNum);
        console.log(typeof displayNum);


    }  else if (typeof displayNum === "number") { // 2nd step, there is something in display but not in operator holder  
            if (displayText.charAt(0) === "0" ) {
                console.log(displayText);
                displayText = displayText.slice(1);
                display.textContent = displayText;
            }
        display.textContent += number;
        displayText = display.textContent;
        displayNum = Number(displayText);
        console.log(displayNum);
        console.log(typeof displayNum);

    } else if(typeof operatorHolder !== "undefined") { 
            if (displayText.charAt(0) === "0") {
                displayText = displayText.slice(1);
                display.textContent += number;
                displayText = display.textContent;
                displayNum = Number(displayText);
                console.log(typeof displayNum, displayNum);
    
            }
        display.textContent = number;
        displayText = display.textContent;
        displayNum = Number(displayText);
        console.log(displayNum);
        console.log(typeof displayNum);

    } else if (typeof operatorHolder === "undefined") {

        display.textContent = number;
        displayText = display.textContent;
        displayNum = Number(displayText);
        console.log(displayNum);
        console.log(typeof displayNum);

    } 


} 


switch (target.className) {
    case "nine": 
       updateDisplay("9"); 
    //    displayText= display.textContent;
    // //    displayNum = Number(display.textContent);
    // //    console.log(displayNum);
    // //    console.log(typeof displayNum);
    break;

    case "eight": 
        updateDisplay("8");
    //     displayText = display.textContent;
    //     displayNum = Number(display.textContent);
    //    console.log(displayNum);
    //    console.log(typeof displayNum);
    break; 

    case "seven": 
       updateDisplay("7");
    //    displayValue = Number(display.textContent);
    //    updateHolders(displayValue);
    //    console.log(displayValue);
    break;

    case "six": 
       updateDisplay("6");
    //    displayValue = Number(display.textContent);
    //    updateHolders(displayValue);
    //    console.log(displayValue);
    break;

    case "five": 
       updateDisplay("5");
    //    displayValue = Number(display.textContent);
    //    updateHolders(displayValue);
    //    console.log(displayValue);
    break;

    case "four": 
       updateDisplay("4");
    //    displayValue = Number(display.textContent);
    //    updateHolders(displayValue);
    //    console.log(displayValue);
    break;

    case "three": 
       updateDisplay("3");
    //    displayValue = Number(display.textContent);
    //    updateHolders(displayValue);
    //    console.log(displayValue);
    break;

    case "two": 
       updateDisplay("2");
    //    displayValue = Number(display.textContent);
    //    updateHolders(displayValue);
    //    console.log(displayValue);
    break;

    case "one": 
       updateDisplay("1");
    //    displayValue = Number(display.textContent);
    //    updateHolders(displayValue);
    //    console.log(displayValue);
    break;

    case "zero": 
        isEqualsClicked = false; 
        if ((displayText.charAt(0) === "0" && displayText.length == 1)|| typeof displayText === "undefined")  {
            display.textContent = "0"; 
            displayText = display.textContent;
            displayNum = Number(displayText);
            console.log(typeof displayNum, displayNum, typeof displayText);
            
        }  else if (typeof operatorHolder !== "undefined"  ) { 

                if (typeof displayNum !== "string" ) { 
                    display.textContent += "0";
                    displayText = display.textContent;
                    displayNum = Number(displayText);
                    console.log(typeof displayNum, displayNum, typeof displayText);


                } else { 
                    display.textContent = "0"
                    displayText = display.textContent;
                    displayNum = Number(displayText);
                    console.log(displayNum);
                    console.log(typeof displayNum);

                }  
        } else if (displayText.length > 0 ) {

            display.textContent += "0";
            displayText = display.textContent;
            displayNum = Number(displayText);
            console.log(typeof displayNum, displayNum);


    }
        
        // else { 
        //     display.textContent += "0";
        //     displayText = display.textContent;
        // displayNum = Number(displayText);
        // console.log(displayNum);
        // console.log(typeof displayNum);
        // }

        
    
        //  displayValue = Number(display.textContent);``
        // updateHolders(displayValue);
        // console.log(displayValue);
        //if displayText[0] === "0" then 
        // displayText becomes "0"
        // otherwise, the zero gets added like normal. 
    break;

 }

});

console.log(typeof displayNum);

// function to store the operator holder

calculator.addEventListener("click", function (event) {
    let target = event.target;

    function updateHolders(number) { 
        
        if (typeof val1Holder === "undefined") { 
            val1Holder = number;
            console.log(val1Holder);
            displayNum = '';

            return val1Holder;
        } else if (val2Holder === '') { 
         


        } else {
            val2Holder = number;
            console.log(val1Holder,val2Holder);
            displayNum = '';
            let result = operatorHolder(val1Holder,val2Holder);
            display.textContent = result;
            val1Holder = Number(result);
            console.log(typeof result, result);
            val2Holder= undefined;
            
            
        } 
    }

    switch (target.className) {
        case "add":
            isEqualsClicked= false;
            

           //what's happening: 
           // I press 77 
           // i press + 66 

           
            updateHolders(displayNum);
            operatorHolder = add;
            console.log(operatorHolder);
            console.log(displayNum);
            
        break;
        
        case "subtract":
            isEqualsClicked= false;
            updateHolders(displayNum);
            operatorHolder = subtract;
            console.log(operatorHolder);
        break;

        case "multiply":
            isEqualsClicked= false;
            updateHolders(displayNum);
            operatorHolder = multiply;
            console.log(operatorHolder);
        break;

        case "divide":
            isEqualsClicked= false;
            updateHolders(displayNum);
            operatorHolder = divide;
            console.log(operatorHolder);
        break;
    }
}
) 

let equals = document.querySelector(".equals");

equals.addEventListener("click", function () { 

    
    // if (typeof val1Holder !== "undefined" && typeof val2Holder === "undefined" ) { 
    //     val2Holder = displayNum;
    //     displayNum = '';
    //     let result = operatorHolder(val1Holder,val2Holder);
    //      display.textContent = result;
    //      val1Holder = Number(result);
    //      console.log(typeof result, result);
    //      val2Holder= undefined;
    //      operatorHolder = undefined;
    //      console.log(typeof val1Holder, val1Holder);
    //  } else if (typeof val1Holder === "number" && val2Holder === "" ) {
    //      val2Holder = displayNum;
    //      displayNum = '';
    //      let result = operatorHolder(val1Holder,val2Holder);
    //      display.textContent = result;
    //      val1Holder = Number(result);
    //      console.log(typeof result, result);
         
    //  } 
 
 }


);

let clear = document.querySelector(".AC");

clear.addEventListener ("click", function () { 

    displayText = "0";
   displayNum = undefined;
   val1Holder = undefined;
   val2Holder = undefined;
   operatorHolder = undefined;
   isEqualsClicked = false; 
   display.textContent = "0";
   
}
);



// pseudo for making calc work
// displayValue to automatically be set to val1
// if + pressed, we will be using add()
// second displayValue to be set to val2
// when user presses = key, invoke operate();

//val1holder 
// val2holder 
//operatorholder
// equals calls function operate where
// val1 = val1holder
//val2 = val2holder
//oper = operatorholder


// for each press
//create val1holder and make it empty 
// if val1holder empty
// once button pressed, displayValue becomes val1holder
// clear val1holder
// else displayValue = val2holder
// cleardisplayValue


// else if operatorholder empty 
// operatorholder becomes + function.

//val1holder = val1 
//operatorHolder = add()
//val2Holder = val2
// equals sign = operatorHolder(val1,val2);

// let holder1 = 4;
// val1= holder1;

// holder1 = 0;
//  operatorHolder = add;
// let holder2 = 6;

// val2 = holder2;

// let equals = operatorHolder(val1,val2);


//reset display with clicked number if 0. if another number already 
       // there concatenates. 

       //pseudo 
        //press 9
        // if 0 is there then display 9
        // displayText = "9" 
        // displayNum = 9
        // if number already on display, concatenate 
        // displayText = "99"
        //displayNum = 99
        // when operator button pressed
        // assign operator func to operatorHolder
        // reset displayNum = 0;
        // keep displaying displayText until the next number pressed
        // related to displayLogic may need to seperate displayText func and 
        // displayNum func

        // what i'm trying to do is once the operator button has been pressed,
        // to reset the current displayValue, but still have the text displayed
        // until the second digit is pressed??
        // does this require some sort of conditional on a digit button click? 
        // if operator is already full then delete num and display and start 
        // display fresh?? on update display? 

        // pseudo for adding 999 + 8 
        //button 9 is pressed
        // nothing prev on display so display becomes "9"
        //displayNum = 9
        //displayText = "9"
        // button 9 is pressed again
        // display is not 0 so concat
        // displayText becomes "99"
        // displayNum becomes 99
        //button 9 is pressed again
        // display is not 0 so concat
        // displayText becomes "999"
        // displayNum becomes 999

        //      we move to pressing add button

        // add button pressed 
        // if operator pressed, displayNum becomes val1Holder;
        // reset displayNum, but keep displayText
        // on digit click - if val1Holder is not undefined, 
        //displayText resets to new digit
        //displayNum becomes new digit

        // what happens when result becomes val1holder.
        // when I press plus


            /// pseudo for storing displayNumbers in arrays 
            // let displayNumber = empty array
            // onClick, use array.push to add element to array. 
            // keep adding if user presses digits.

            // when an operator is pressed, assign "add" (or whatever operator) to 
            // create  join to turn into string
            // transform that string into a number
            // 


 // steps to reproduce 
    // press: 
    // 77 
    // + 
    // 99 
    // * (should show) =  176  
    // 12 
    // - (should show result of 176*12) = 2112 
    // 7 
    // + (shows result of 2112 - 7) = 2105 
    // 123 
    // /  (show result of 2105 + 123 ) = 2228 
    // 4 
    // - (show result of 2228 / 4) = 557 
    // 9 
    // + (shows result of 557 - 9 ) = 548









