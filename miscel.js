//let, const, and var (scope difference)
function scopeExample() {
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a, b, c);
}
scopeExample();


console.log("------------------------------------------------------------------");


//Array fruits & return second fruit
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
  return fruits[1];
}

console.log(getSecondFruit());


console.log("------------------------------------------------------------------");



//push() and pop() in an array
function modifyArray(arr) {
  arr.push("New Item"); // adds to end
  arr.pop();           // removes last item
  return arr;
}

console.log(modifyArray([1, 2, 3]));


console.log("------------------------------------------------------------------");



//4. map() to square numbers
function squareNumbers(numbers) {
  return numbers.map(num => num * num);
}

console.log(squareNumbers([1, 2, 3, 4]));


console.log("------------------------------------------------------------------");



//filter() odd numbers only
function getOddNumbers(numbers) {
  return numbers.filter(num => num % 2 !== 0);
}

console.log(getOddNumbers([1, 2, 3, 4, 5]));


console.log("------------------------------------------------------------------");


//6. Object person & greeting
const person = {
  name: "Rahul",
  age: 22,
  occupation: "Student"
};

function greetPerson(person) {
  console.log(`Hello, my name is ${person.name}. I am a ${person.occupation}.`);
}

greetPerson(person);


console.log("------------------------------------------------------------------");


//7. Area of rectangle from object
function calculateArea(rect) {
  return rect.width * rect.height;
}

console.log(calculateArea({ width: 10, height: 5 }));


console.log("------------------------------------------------------------------");


//8.Get object keys using Object.keys()
function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log(getObjectKeys({ name: "Amit", age: 25, city: "Pune" }));

console.log("------------------------------------------------------------------");


//9.Merge two objects using Object.assign()
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log(mergeObjects({ a: 1 }, { b: 2 }));

console.log("------------------------------------------------------------------");


//10.reduce() to find sum of array
function sumNumbers(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers([1, 2, 3, 4]));

console.log("------------------------------------------------------------------");



