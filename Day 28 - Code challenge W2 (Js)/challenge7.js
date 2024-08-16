//Coding challenge #7

const mark = {
    fullName : "Mark Miller",
    weight : 78,
    height : 1.69,
    calcBMI : function(){
        console.log(`Mark's BMI = ${mark.weight/(mark.height*mark.height)}`);
    }
}
const john = {
    fullName : "John Smith",
    weight : 92,
    height : 1.95,
    calcBMI : function(){
        console.log(`John's BMI = ${john.weight/(john.height*john.height)}`);
    }
}
mark.calcBMI();
john.calcBMI()