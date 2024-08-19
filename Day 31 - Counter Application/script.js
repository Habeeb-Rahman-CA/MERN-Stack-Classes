num = 0;

// Increment function
document.querySelector(".btn-success").addEventListener("click", function() {
    num++
    document.querySelector('.number').textContent = num;
})

//Decrement function
document.querySelector(".btn-primary").addEventListener("click", function () {
    if (num <= 0) {
       num=0
       document.querySelector('.number').textContent = num;
    } else {
        num--
        document.querySelector('.number').textContent = num;
    }
})

//Reset Function
document.querySelector(".btn-danger").addEventListener("click", function () {
    num=0
    document.querySelector('.number').textContent = num;
})





// // Another method to create Count application

// num = 0;
// const displayCount = (num) =>{
//     document.querySelector('.number').textContent = num;
// }


// const Calculate = (value) => {
//     if (value == 'Increment'){
//         num++;
//         displayCount(num);
//     }
//     else if (value == 'Decrement') {
//         num--;
//         displayCount(num);
//     }
//     else {
//         num=0;
//         displayCount(num);
//     }
// }

