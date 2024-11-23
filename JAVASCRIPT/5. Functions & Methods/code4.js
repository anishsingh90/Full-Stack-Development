/* Qs 1. Create a function using the "function" keyword that 
takes a String as an argument & returns the number of vowels in 
the string.

      OR

Qs 2. Create an arrow function to perform the same task.
*/ 

//By using normal function
function countVowels(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if ('aeiou'.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count; //return the count
}

let vowels = countVowels("anish");
console.log(vowels);



//by using arrow function
const countVowelsArrow = (str) => {
    if(typeof str !== 'string') return 0; //handle non-string inputs
    return Array.from(str.toLowerCase()).filter(char => 'aeiou'.includes(char)).length;
};

let countVowels1 = countVowelsArrow("anish");

console.log(countVowels1);