let operand_one = 0; // The first number in the equation
let operand_two = 0; // The second number in the equation
let operator = null; // The operator in the equation
let display_number = document.querySelector("#display"); // The number that is displayed on the screen of the calculator
let calculator = document.querySelector("#calculator"); // Selecting the calculator div

// Addition function
let add = (a,b) => {
    return a + b;
};

// Subtraction function
let subtract = (a,b) => {
    return a - b;
};

// Multiplication function
let multiply = (a,b) => {
    return a * b;
};

// Division function
let divide = (a,b) => {
    if (b == 0){

    }
    return a / b;
};

// Operate function
//
// Takes in two numbers (operands) and an operator function (Add,Subtract,...)
let operate = (operandOne, operatorFunction, operandTwo) => {
    if(operator != null){
        operand_one = operatorFunction(operandOne, operandTwo);
        if(operand_one > 9999999999 || operand_one < -999999999){
            display_number.textContent = "Nuh Uh";
            operand_one = 0;
            operand_two = 0;
            operator = null;
        }
        else {
            display_number.textContent = operand_one;
            operand_two = 0;
            operator = null;
        }
        
    }
};

// Add To Display Function
//
// Takes in a number and simply adds it to the display of the calculator
// Also makes sure that the display doesn't overflow
let addToDisplay = (button) => { 
    
    if(display_number.textContent.toString().length > 9) { // if display is larger than 9 digits do nothing
    }
    else if(display_number.textContent == "x" || // if display contains any of these, clear it
            display_number.textContent == "+" || // and append the button that was pressed
            display_number.textContent == "-" ||
            display_number.textContent == "÷" ||
            display_number.textContent == "Nuh Uh" ||
            display_number.textContent == 0){
        display_number.textContent = button;
    }
    else {
        display_number.textContent += button; // append the button to the display
    }
    
};

// Set Operand Function
//
// Takes in a number and decides if it is attributed to the first or second operand
let setOperand = (number) => {
   if(operator == null){
        if(operand_one.toString().length > 9){

        }
        else {
            operand_one = Number(operand_one.toString() + number.toString());
        }
        console.log("OP1: " + operand_one);
        console.log(operator);
   }
   else {
        if(operand_two.toString().length > 9){

        }
        else {
            operand_two = Number(operand_two.toString() + number.toString());
        }
        console.log("OP2: " + operand_two);
        console.log(operator);
   }
};

// Set Operator Function
//
// Takes in an operation function "opr", and the string associated with it "stringOpr" (+, -, x, ÷)
// Assigns the operator that was clicked
let setOperator = (opr, stringOpr) => {
    if(operator == null){
        operator = opr;
        display_number.textContent = stringOpr;
    }
};


//Listening to the user's click inputs
calculator.addEventListener("click", (e) => {
    let input = e.target.id; // Retrieve which button was pressed

    switch(input) {
        case "one":
            addToDisplay(1);
            setOperand(1);
            break;
        case "two":
            addToDisplay(2);
            setOperand(2);
            break;
        case "three":
            addToDisplay(3);
            setOperand(3);
            break;
        case "four":
            addToDisplay(4);
            setOperand(4);
            break;
        case "five":
            addToDisplay(5);
            setOperand(5);
            break;
        case "six":
            addToDisplay(6);
            setOperand(6);
            break;
        case "seven":
            addToDisplay(7);
            setOperand(7);
            break;
        case "eight":
            addToDisplay(8);
            setOperand(8);
            break;
        case "nine":
            addToDisplay(9);
            setOperand(9);
            break;
        case "zero":
            addToDisplay(0);
            setOperand(0);
            break;
        case "equal":
            operate(operand_one, operator, operand_two);
            break;
        case "period":
            console.log("PERIOD WAS PRESSED!");
            break;
        case "add":
            setOperator(add, "+");
            break;
        case "subtract":
            setOperator(subtract, "-");
            break;
        case "multiply":
            setOperator(multiply, "x");
            break;
        case "divide":
            setOperator(divide, "÷");
            break;
        case "clear":
            operand_one = 0;
            operand_two = 0;
            operator = null;
            display_number.textContent = 0;
            break;
        case "display":
            let red = Math.random() * 256;
            let green = Math.random() * 256;
            let blue = Math.random() * 256;
            e.target.style.backgroundColor = `rgba(${red},${green},${blue}, 0.753)`;
            break;
    }
});


//Listening to the user's mouse over inputs
calculator.addEventListener("mouseover", (e) => {
    let input = e.target.id; // Retrieve which button was pressed

    switch(input) {
        case "one":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "two":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "three":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "four":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "five":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "six":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "seven":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "eight":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "nine":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "zero":
            e.target.style.backgroundColor = "rgba(191, 113, 45, 0.75)";
            break;
        case "equal":
            e.target.style.backgroundColor = "rgba(255, 153, 0, 0.75)";
            break;
        case "period":
            e.target.style.backgroundColor = "rgba(249, 220, 158, 0.5)";
            break;
        case "add":
            e.target.style.backgroundColor = "rgba(232, 66, 66, 0.75)";
            break;
        case "subtract":
            e.target.style.backgroundColor = "rgba(232, 66, 66, 0.75)";
            break;
        case "multiply":
            e.target.style.backgroundColor = "rgba(232, 66, 66, 0.75)";
            break;
        case "divide":
            e.target.style.backgroundColor = "rgba(232, 66, 66, 0.75)";
            break;
        case "clear":
            e.target.style.backgroundColor = "rgba(232, 198, 45, 0.75)";
            break;
    }
});

//Listening to the user's mouse out inputs
calculator.addEventListener("mouseout", (e) => {
    let input = e.target.id; // Retrieve which button was pressed

    switch(input) {
        case "one":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "two":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "three":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "four":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "five":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "six":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "seven":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "eight":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "nine":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "zero":
            e.target.style.backgroundColor = "rgb(191, 113, 45)";
            break;
        case "equal":
            e.target.style.backgroundColor = "rgb(255, 153, 0)";
            break;
        case "period":
            e.target.style.backgroundColor = "rgb(249, 220, 158)";
            break;
        case "add":
            e.target.style.backgroundColor = "rgb(232, 66, 66)";
            break;
        case "subtract":
            e.target.style.backgroundColor = "rgb(232, 66, 66)";
            break;
        case "multiply":
            e.target.style.backgroundColor = "rgb(232, 66, 66)";
            break;
        case "divide":
            e.target.style.backgroundColor = "rgb(232, 66, 66)";
            break;
        case "clear":
            e.target.style.backgroundColor = "rgb(232, 198, 45)";
            break;
    }
});

// Need to take care of period
// Numbers overflow whenever they have a period (from division)