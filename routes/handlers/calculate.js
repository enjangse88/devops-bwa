const add = (a, b)  => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const calculate = (operator, a, b) => {
    let number1 = a;
    let number2 = b;

    if (typeof number1 === 'string') number1 = parseInt(a);
    if (typeof number2 === 'string') number2 = parseInt(b);

    switch (operator) {
        case 'add':
            return add(number1,number2);
        case 'subtract':
            return subtract(number1,number2);
        case 'multiply':
            return multiply(number1,number2);
        case 'divide':
            return divide(number1,number2);           
        default:
            return 'Operator not found!'
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    calculate
}