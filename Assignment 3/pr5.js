//Write a function to replace wrong word with correct word in any sentance.
function correctword(sentence,wrong,correct){
    return sentence.replace(wrong,correct);
}

console.log(correctword('I like Java Prugrming','Prugrming','Programming'));

//8
function singleDigitSum(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

console.log(singleDigitSum(456)); // 6


//9
function wordCount(text) {
  return text.trim().split(/\s+/).length;
}

console.log(wordCount("JavaScript is very easy to learn"));

//10
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // olleH

