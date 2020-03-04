
//example 1
const ages = [12, 14,16,13, 17];
const ages2 = [13, 15,16,19, 30];
const ages3 = [20, 24, 25];

const allages = ages.concat(ages2).concat(ages3).concat([5]);
const allages2 = [ages, ages2, ages3]
console.log(allages2);
console.log(allages);

const allages3 = [...ages, ...ages2, 5, ...ages3]
console.log(allages3);

//example 2

const business = 650;
const minister = 550;
const sochib = 350;

const maximum = Math.max(business, minister, sochib); 

console.log(maximum);

//example 3

const takapoisa = [750, 450,250];
const maximum1 = Math.max(...takapoisa);
console.log(maximum1);
