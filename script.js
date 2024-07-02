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

 


