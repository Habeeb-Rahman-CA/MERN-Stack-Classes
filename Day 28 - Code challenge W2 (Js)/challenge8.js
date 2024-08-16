// Coding challenge #8

// array for the bills
const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

// function to calculate the tips
function calcTip(billValue){
    return billValue < 300 ? billValue*15/100 : billValue*20/100
}

// for loop to calculate the total amount of all bills.
for (let i = 0; i < bills.length; i++) {
    console.log(`(Bill = ${bills[i]}) + (Tip = ${calcTip(bills[i])}) = ${bills[i]+(calcTip(bills[i]))}`);
}