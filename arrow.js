
// Example-2
function doubleIt(num){
    return num * 2;
}

const result = doubleIt(5);
console.log(result);

// Example-2 in Es6

const doubleIt2 = num => num * 2;
const result2 = doubleIt2(50);
console.log(result2);

//example -3 (more than one function)

const doubleIt3 = (x, y) => x + y;
const result3 =doubleIt3(50, 60);
console.log(result3);

//example -4 (more than one function)

const give5 = () => 5;
const result4 = give5();
console.log(result4);

//example -5 (more than one function)

// const give5 = () => 5;
// const result4 = give5();
// console.log(result4);


//example -5

const addMath =(x, y) => {
    const sum = x + y ;
    const minus = x - y;
    const total = sum * minus;
    return total;
} 
const result5 = addMath(50, 40);
console.log (result5);

