// // Example for "For of" 

// function add(...values){
//     let sum = 0
//     for ( let i of values){
//         sum += i;
//     }
//     console.log(sum);
// }

// add(20,10,20)



// //Example for "For In"
// const numbers = {
//     num1 : 10,
//     num2 : 20,
//     num3 : 30,
//     num4 : 40,
//     num5 : 50
// }

// let sum = 0
// for (let i in numbers){
//     sum += numbers[i] //The value of the key is numbers[i]
// }
// console.log(sum);



// // Example for forEach
// const numbers = [10,20,30,40,50]

// let sum = 0
// numbers.forEach((values) => {
//     sum += values
// });

// console.log(sum);



// // Example for reduce
// const numbers = [10,20,30]


// let sum = numbers.reduce((total,values) => { 
//     return total + values 
// },0)

// console.log(sum);



// //Example for Map
// const fruits = ["Apple","Orange","Mango","Grape","Banana"]

// const newFruits = fruits.map((fruit) => fruit + "s")
// console.log(newFruits);



//Example for filter
const friends =[{
    name : 'Ansaf',
    age : 21,
    gender : 'Male',
},
{
    name : 'Shamnad',
    age : 21,
    gender : 'Male',
},
{
    name : 'Asger',
    age : 20,
    gender : 'Male',
},
{
    name : 'Ameera',
    age : 21,
    gender : 'Female',
},
{
    name : 'Vismaya',
    age : 19,
    gender : 'Female',
}]

const male = friends.filter((friend) => friend.gender === 'Male')
console.log(male);

const female = friends.filter((friend) => friend.gender === 'Female')
console.log(female);

