//Coding Challenge #1

massMark=78;
massJohn=95;
heightMark=1.69;
heightJohn=1.88;

BMIMark=massMark/(heightMark*heightMark);
BMIJohn=massJohn/(heightJohn*heightJohn);

console.log("BMI of John is " + BMIJohn + "  " + "BMI of Mark is " + BMIMark);


// Coding challenges #2

bothBMI=`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`

console.log(bothBMI);


// Coding challenges #3

scoreDolphins = (96+108+89)/3;
scoreKoalas = (88+91+110)/3;

if (scoreDolphins>scoreKoalas) {
    console.log(`Dolphin win the trophy (${scoreDolphins})`);
} else if (scoreDolphins<scoreKoalas) {
    console.log(`Koalas win the trophy (${scoreKoalas})`)
} else {
    console.log("Both win the trophy");
}


// Coding Challenges #4

bill=275
console.log("The Amount is " + bill);

amount= bill < 300 ? tip = bill*15/100:tip = bill*20/100;
console.log("The tip is " + amount);

console.log(`Total amount ${bill+tip}`);