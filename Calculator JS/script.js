let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

const display = document.getElementById('display')

let numArray = []
let secondNumArray = []

//setting the first number and merging to one string 
const getnumber = (num) => {
    if (step === 0 || step === 1) {
        numArray.push(num) // [1,2,3]
        step = 1
        firstNumber = Number(numArray.join('')) //merge into one string, then into Number
        display.value = firstNumber
    } else if (step === 2) {
        secondNumArray.push(num)
        secondNumber = Number(secondNumArray.join(''))
        display.value = secondNumber
    }
}

const getOperator = (op) => {
    step = 2
    operation = op
}

const clearDisplay = () => {
    display.value = 0
    firstNumber = null
    secondNumber = null
    step = 0
    operation = null
    result = 0
    numArray = []
    secondNumArray = []
}

const calculateEquals = () => {
    if (operation === '+'){
        result = firstNumber + secondNumber
        display.value = result
    } else if (operation === '-') {
        result = firstNumber - secondNumber
        display.value = result
    } else if (operation === '*'){
        result = firstNumber * secondNumber
        display.value = result
    } else if (operation === '/'){
        result = firstNumber / secondNumber
        display.value = result
    }
}