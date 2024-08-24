// // Coding Challenge #15
// const checkdogs = (juliaDogs,kateDogs) => {
//     let newJuliaDogs = [...juliaDogs.slice(1,-2)]
//     let allDogs = [...newJuliaDogs,...kateDogs]

//     for (let i = 0; i < allDogs.length; i++) {
//         if (allDogs[i]>=3) {
//             console.log(`Dog Number ${i+1} is an Adult, and is ${allDogs[i]}`);
//         } else {
//             console.log(`Dog Number ${i+1} is still a puppy`);
//         }
//     }
// }
// checkdogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])


// //Coding Challenge #16
// const calcAverageHumanAge = (ages) => {
//     //Converting Dog age into Human age.
//     const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     console.log(humanAge);
//     //Exclude less than 18 year old.
//     const adults = humanAge.filter(age => age >= 18)
//     console.log(adults)
//     //Average of the adult dogs.
//     const average = adults.reduce((total,age) => total + age  / adults.length,0)
//     console.log("Average(Adult Dogs) : ",average);
// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]) 

//Coding Challenge #17
// const calcAverageHumanAge = ages =>
//     ages
//         .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) //Converting Dog age into Human age.
//         .filter(humanAge => humanAge >= 18) //Exclude less than 18 year old.
//         .reduce((total, age, _, arr) => total + age / arr.length, 0) //Average of the adult dogs.

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

//Coding Challenge #18
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Add new property to the array
dogs.forEach(dog => {
    dog.recommandedFood = Math.round(dog.weight**0.75*28)
});

const sarahDog = dogs[2] //We assign Sarah's Dog to 'sarahDog'
console.log(sarahDog)

//check Sarah Dog eating too much or too little
if (sarahDog.curFood > sarahDog.recommandedFood) {
    console.log("Sarah dog is eating too much");
} else if (sarahDog.curFood < sarahDog.recommandedFood) {
    console.log("Sarah dog is eating too little");
} else {
    console.log("Sarah dog is eating perfect amount");
}

//find who eat too much and too little
const ownersEatTooMuch = []
const ownersEatTooLittle = []

dogs.forEach(dog => {
    if (dog.curFood > dog.recommandedFood){
        ownersEatTooMuch.push(...dog.owners)
    } else if (dog.curFood < dog.recommandedFood) {
        ownersEatTooLittle.push(...dog.owners)
    }
})

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`)

//check any dog eating exactly recommended food
const eatingExactly = dogs.some(dog => dog.curFood === dog.recommandedFood)
console.log("Any dog eating exactly recommended food",eatingExactly)

//check any dog eating okay amount of food
const eatingOkay = dog => dog.curFood > dog.recommandedFood * 0.9 && dog.curFood < dog.recommandedFood * 1.1
const isEatingOkay = dogs.some(eatingOkay)
console.log("Any dog eating okay amount of food",isEatingOkay);

//Dog eating okay amount of food will add to an array
const dogsEatingOkay = dogs.filter(eatingOkay)
console.log("Dog eating okay : ",dogsEatingOkay);

// Copy the array and make it acsending order based on recommended food
const sortedDogs = [...dogs].sort((a,b) => a.recommandedFood - b.recommandedFood)
console.log(sortedDogs);