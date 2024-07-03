function add (add1,add2) {
  return Number((add1 + add2).toFixed(6));
};

function subtract (subtract1, subtract2) {
     return Number((subtract1 - subtract2).toFixed(6));
};

function multiply (multiply1, multiply2) {
    return Number((multiply1 * multiply2).toFixed(6));

};

function divide (divide1,divide2) {
    if (divide2 === 0|| divide1 === 0 ) { 
        return "Busted";
    } else { 
       return Number((divide1 / divide2).toFixed(6));
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

 let displayValue;


 let nine = document.querySelector(".nine");

 let calculator = document.querySelector(".calculator");

calculator.addEventListener("click", function (event) { 
const display = document.querySelector(".display");
let target = event.target;

function updateDisplay(number) {
    if (display.textContent === "0") {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
} // helper to keep common logic outside of switch cases


switch (target.className) {
    case "nine": 
       updateDisplay("9");
       displayValue = 9;
       console.log(displayValue);
    break;

    case "eight": 
        updateDisplay("8");
        displayValue = 8;
        console.log(displayValue);
    break; 

    case "seven": 
       updateDisplay("7");
       displayValue = 7;
       console.log(displayValue);
    break;

    case "six": 
       updateDisplay("6");
       displayValue = 6;
       console.log(displayValue);
    break;

    case "five": 
       updateDisplay("5");
       displayValue = 5;
       console.log(displayValue);
    break;

    case "four": 
       updateDisplay("4");
       displayValue = 4;
       console.log(displayValue);
    break;

    case "three": 
       updateDisplay("3");
       displayValue = 3;
       console.log(displayValue);
    break;

    case "two": 
       updateDisplay("2");
       displayValue = 2;
       console.log(displayValue);
    break;

    case "one": 
       updateDisplay("1");
       displayValue = 1;
       console.log(displayValue);
    break;

 }

});




