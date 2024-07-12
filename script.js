function add (add1,add2) {
    return Number((add1 + add2))
  };
  
  function subtract (subtract1, subtract2) {
       return Number((subtract1 - subtract2))
  };
  
  function multiply (multiply1, multiply2) {
      return Number((multiply1 * multiply2));
  
  };
  
  function divide (divide1,divide2) {
      if (divide2 === 0|| divide1 === 0 ) { 
          return "Busted";
      } else { 
         return Number((divide1 / divide2));
      };
  }


// basic maths functions 


function operate(val1,oper,val2) {
   if (oper === add) { 
    return add(val1,val2);
} else if(oper === subtract) { 
    return subtract(val1,val2) ;
} else if (oper === multiply) { 
    return multiply(val1,val2);

} else if (oper === divide) { 
    return divide(val1,val2);
}

 };

 // operate function to store holder values and the specificed maths function

//  let test = operate(4,add,5);

//  console.log(test);

 // button function pseudo

 //when button pressed 
 // if display showing 0 then clear
 //enter number into display
 // store number in variable for future use

 // sample transaction 77 + 23 = 100
 // + 34 
 // / 8 

 let displayText = [];
 let fullNumber;
 let displayNum ; 
 let tempResult;

 let tempVal1 = [];
 let tempVal2 = [];




 let calculator = document.querySelector(".calculator");
 let display = document.querySelector("#display")


calculator.addEventListener("click", function (event) { 
let target = event.target;

function updateDisplay(digit) {
    if (display.textContent.trim() === String(tempResult).trim()) { 
        displayText =[]
    }
    displayText.push(digit);
    display.textContent = displayText.join('');
    console.log(displayText)
    
}


// helper to keep common logic outside of switch cases



switch (target.id) {
    case "nine": 
       updateDisplay("9");
    break;

    case "eight": 
        updateDisplay("8");
    break; 

    case "seven": 
       updateDisplay("7");
    break;

    case "six": 
       updateDisplay("6");
    break;

    case "five": 
       updateDisplay("5");
    break;

    case "four": 
       updateDisplay("4");
    break;

    case "three": 
       updateDisplay("3");
    break;

    case "two": 
       updateDisplay("2");
    break;

    case "one": 
       updateDisplay("1");
    break;
    case "zero": 
        updateDisplay("0");
    break;


 }





});

function computation (holderArray) { 

        if (holderArray.length === 3) { 

            return operate(+holderArray[0],holderArray[1],+holderArray[2])
        }
 }

calculator.addEventListener("click", function (event) { 
    let target = event.target
    

    // what we want to happen here, is add the displayNum to the 
    // first index holder array, and the operator to the operatorholder. 
    // if the first index is not empty though, then display number goes to 
    // the 3rd index.

    // then i have a nother function that says if array length is 3, 
    // perform calculation using operate ( array[0], array[1], array[2])
    // store result in a temp result file. 
    // when user presses equals or operators
    //  clear the array, put the result in array[0].
    // 

   

    function updateHolders (operator) {
        

        if (tempVal1.length === 0  && displayText.length !== 0) { 
            displayNum = +(displayText.join(''))
            tempVal1[0] = displayNum
            tempVal1[1] = operator
            displayNum = ''
            displayText = []
            console.log(tempVal1)
            
        } else if (tempVal1.length === 1) { 
            tempVal1[1] = operator

        } else if (tempVal1.length > 1 ) { 
            displayNum = +(displayText.join(''))
            tempVal1[2] =  displayNum
            displayNum = ''
            console.log(tempVal1)
           tempResult = computation(tempVal1);
           resultDisplay = divideByZero(tempResult)
            display.textContent = resultDisplay
            console.log(tempResult,displayText);
            // display.textContent = +tempResult.toFixed(6);
            tempVal1 = []
            tempVal1[0] = tempResult;
            tempVal1[1] = operator;
        }
        
     }

   

     // a type of loop that performs a calculation once tempVal1. length == 3
     // then we have operate with parameters(tempVal1[0],tempVal1[1], tempVal1[2])

    switch (target.id) { 
        case "add": 
            updateHolders (add)
        break ;

        case "subtract": 
            updateHolders (subtract)
        break;

        case "multiply": 
            updateHolders (multiply)
        break;

        case "divide": 
            updateHolders (divide)
        break;

    }

}

)

function divideByZero (tempResult) {

        if (tempResult === "Busted") { 
            return "Busted";
        } else { 
            return +tempResult.toFixed(6);
        }
 }

 let decimal = document.getElementById("decimal");


 decimal.addEventListener("click", function () { 
    if (displayText.length === 0 ) { 
        displayText.push("0",".")
        display.textContent = displayText.join('');
        console.log(displayText);
    } else if (displayText.includes(".")) { 
        return;
    } else { 
        displayText.push(".")
        display.textContent = displayText.join('');

    }
 }) 

 // small section about click not sure if EB but if a calculation has been performed and result is being displayed
 // on screen, when decimal is pressed, the display shows "0." rather than addding 
 // the decimal to the result 
 // should be an easy fix if not EB.



 // what do i want the check to do: 

// basic state add decimal point
// if decimal point is in the displayText array then do nothing;
// else if decimal point is at index[0], then add 0 to beginning of index



 // this function will need to be used in conditioning for clearing valHolder1 
 // so that if busted has been displayed, everything will need to be reset like AC,
 // apart from the display. TBC 

 let resultDisplay;

let equals = document.querySelector("#equals")

equals.addEventListener("click", function () { 

    console.log(tempVal1)

    if (tempVal1.length < 2 ) { 
        return;
    } else { 
    displayNum = +(displayText.join(''))
    tempVal1[2] =  displayNum
    tempResult = computation(tempVal1);
    resultDisplay = divideByZero(tempResult)
    display.textContent = resultDisplay
    displayText = []
    tempVal1 = []
    tempVal1[0] = tempResult
    console.log(tempVal1,displayText)
    }   
})


let clear = document.getElementById("AC");

clear.addEventListener("click", 

function() { 
    displayText = [];
    displayNum = ''
    tempResult = 0;
    tempVal1 = [];
    tempVal2 = [];
    display.textContent = "0"

}
)
            
let calculation = document.getElementById("calculation");
let myCalculation = document.createElement("p");

myCalculation.textContent = tempVal1;

calculation.appendChild(myCalculation);











