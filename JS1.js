//Program for printing even numbers
console.log('Even numbers between 1 to 100 are :');
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}


// function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

console.log("2 .Different arithmetic operations:");
function calculate(num1,num2,operator){

    switch(operator){

        case'+' :
          return num1+num2;
        
        case '-' :
        return num1-num2;

        case '*' :
            return num1*num2;

        case '/' :
            return num1/num2;

        default:
            return "Invalid operator";
    }

}

console.log(calculate(908,434,'+'));
console.log(calculate(1008, 567, '-')); 
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 5, '/'));



//Function to calculate tax using switch

console.log("Function to calculate tax");
function findtax(salary){
    let tax;

    switch(true){

        case(salary > 0 && salary <=500000):
        tax=0;
        break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

              default:
            return "Invalid salary";
    }
    return tax;
}

console.log(findtax(400000));  
console.log(findtax(700000));   
console.log(findtax(1200000));  
console.log(findtax(2000000));  

//program
console.log("Sum of products of digits with a special condition");
function sumOfProducts(n1, n2) {
    let sum = 0;

    n1 = n1.toString();
    n2 = n2.toString();

    let maxLength = Math.max(n1.length, n2.length);

    for (let i = 0; i < maxLength; i++) {

        let digit1 = Number(n1[n1.length - 1 - i] || 0);
        let digit2 = Number(n2[n2.length - 1 - i] || 0);

        sum += digit1 * digit2;
    }

    return sum;
}

console.log(sumOfProducts(6, 34)); 
console.log(sumOfProducts(123, 45)); 
