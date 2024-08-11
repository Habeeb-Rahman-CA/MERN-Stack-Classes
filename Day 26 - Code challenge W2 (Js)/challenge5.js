// #Coding Challenge #5

//function to find average of 3 numbers
const calcAverage = (a,b,c) => {
    return (a+b+c)/3;
}

//Average score of Dolphin
const scoreDolphin = calcAverage(44,23,71);
console.log(`Dolphin Average Score = ${scoreDolphin}`);

//Average score of Koalas
const scoreKoalas = calcAverage(65,54,49);
console.log(`Koalas Average Score = ${scoreKoalas}`);

//function to check winner
const checkWinner = (avgDolphin,avgKoalas) => {
    if (avgDolphin>avgKoalas) {
        console.log(`Dolphin Win (${avgDolphin} vs ${avgKoalas})`);
    } else if (avgDolphin<avgKoalas) {
        console.log(`Koalas Win (${avgKoalas} vs ${avgDolphin})`);
    }else {
        console.log("No team wins");
    }
}

//call the checkwinner function
checkWinner(scoreDolphin,scoreKoalas);