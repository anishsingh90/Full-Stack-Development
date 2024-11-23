/*Qs2. Create a game where you start with any random game number.
Ask the user to keep guessing the game number until the user enters correct value.
*/

let gameNum = 25;

let userNum = prompt("Guess the game number: ");

while(userNum != gameNum){
    userNum = prompt("You entered wrong number. Guess again: ");
}

console.log("Congratulations, you entered the right number");