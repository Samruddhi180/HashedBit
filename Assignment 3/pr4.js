//Count vowels and consonants

let text = 'I like Java Programming a lot.';

let vow = 0;
let consont = 0;

for(let char of text.toLowerCase()){

    if(char >= 'a' && char <="z"){

    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        vow++;
    }
    else{
        consont++;
    }
}
}

console.log(vow);
console.log(consont);
