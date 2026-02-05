//let str = 'I love my India' output expected = 'India my love I'

let str='I love my India';

let res=str.split(' ').reverse().join(' ');
console.log(res);

//Q3) let string = 'INDIA' output = 'INDONESIA' . Use array.splice
console.log("---------------------------------------")
let str1='INDIA';

let arr=str1.split("");
arr.splice(3,0,'O','N','E','S');

console.log(arr.join(""));


console.log("---------------------------------------")

//pr6 . Filter number greater than 5 answer = [9, 10, 7] .User array.filter
let inputArr = [1,2,3,9,10,7,5,4,3]

let output=inputArr.filter(num => num>5);
console.log(output);


