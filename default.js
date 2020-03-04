// //example -1*****************
// function add(num1, num2){
//     return num1 + num2;
// }

// const total = add (10, 20);
// console.log(total);

//example -2*******************

// function add (num1, num2){
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     return num1 + num2;
// }
// const total = add (10)         
// console.log(total);

//example -3*******************

// function add (num1, num2){
//     num2 = num2 || 0;


//     return num1 + num2;
// }
// const total = add (10)         
// console.log(total);

//example -4*******************

function add(num1, num2 = 10) {
    return num1 + num2;
}
const total = add(10)
console.log(total);