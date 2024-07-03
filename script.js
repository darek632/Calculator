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
 let val1Holder;
 let val2Holder;
 let operatorHolder;


 let nine = document.querySelector(".nine");

 const display = document.querySelector(".display");
let calculator = document.querySelector(".calculator");

calculator.addEventListener("click", function (event) { 

let target = event.target;

function updateDisplay(number) {
    if (display.textContent === "0") {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
} // helper to keep common logic outside of switch cases

function updateHolders(number) { 
    if (typeof val1Holder === "undefined") { 
        val1Holder = number;
        return val1Holder;
    } else {
        val2Holder = number;
        return val2Holder;
    } 
}

switch (target.className) {
    case "nine": 
       updateDisplay("9");
       displayValue = 9;
       updateHolders(displayValue);
       console.log(displayValue);
    break;

    case "eight": 
        updateDisplay("8");
        displayValue = 8;
        updateHolders(displayValue);
        console.log(displayValue);
    break; 

    case "seven": 
       updateDisplay("7");
       displayValue = 7;
       updateHolders(displayValue);
       console.log(displayValue);
    break;

    case "six": 
       updateDisplay("6");
       displayValue = 6;
       updateHolders(displayValue);
       updateHolders(displayValue);
       console.log(displayValue);
    break;

    case "five": 
       updateDisplay("5");
       displayValue = 5;
       updateHolders(displayValue);
       console.log(displayValue);
    break;

    case "four": 
       updateDisplay("4");
       displayValue = 4;
       updateHolders(displayValue);
       console.log(displayValue);
    break;

    case "three": 
       updateDisplay("3");
       displayValue = 3;
       updateHolders(displayValue);
       console.log(displayValue);
    break;

    case "two": 
       updateDisplay("2");
       displayValue = 2;
       updateHolders(displayValue);
       console.log(displayValue);
    break;

    case "one": 
       updateDisplay("1");
       displayValue = 1;
       updateHolders(displayValue);
       console.log(displayValue);
    break;

    case "zero": 
        display.textContent = "0";
        displayValue = 0;
        updateHolders(displayValue);
        console.log(displayValue);

 }

});

calculator.addEventListener("click", function (event) {
    let target = event.target;

    switch (target.className) {
        case "add":
            operatorHolder = add;
            console.log(operatorHolder);
        break;
        
        case "subtract":
            operatorHolder = subtract;
            console.log(operatorHolder);
        break;

        case "multiply":
            operatorHolder = multiply;
            console.log(operatorHolder);
        break;

        case "divide":
            operatorHolder = divide;
            console.log(operatorHolder);
        break;
    }
}
) 

let equals = document.querySelector(".equals");

equals.addEventListener("click", function () { 
    if (typeof val1Holder !== "undefined" && typeof val2Holder !== "undefined" || typeof operatorHolder !== "undefined" ) { 
        console.log(val1Holder,val2Holder);
       let result = operatorHolder(val1Holder,val2Holder);

        display.textContent = result;
        val1Holder = undefined;
        val2= undefined;
        operatorHolder = undefined;
    }

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










