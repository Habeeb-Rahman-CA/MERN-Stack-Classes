//Coding Challenge #6

//function for tip calculation
function calcTip(billValue){
    return billValue < 300 ? billValue*15/100 : billValue*20/100
}

console.log(calcTip(100)); //example with a value

//array to the bills
const bill = [125, 555, 44];

//tips for each bill calculated from the function 
const tip = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])]
console.log(tip);

// total amount (bill+tips) 
console.log(`Total amount \n Bill 1 : ${bill[0]+tip[0]} \n`,`Bill 2 : ${bill[1]+tip[1]} \n`,`Bill 3 : ${bill[2]+tip[2]}`);