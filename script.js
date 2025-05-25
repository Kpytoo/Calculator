let operand_one; // the first number in the equation
let operand_two; // the second number in the equation
let operator; // the operator in the equation

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
    return a / b;
};

// Operate function
//
// Takes in two numbers (operands) and an operator function (Add,Subtract,...)
let operate = (operand_one, operator, operand_two) => {
    return operator(operand_one, operand_two);
};

