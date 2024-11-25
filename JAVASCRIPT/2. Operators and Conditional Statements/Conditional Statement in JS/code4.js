/* Qs2. Write a code which can give grades to students according to their scores.
 80-100, A
 70-79, B
 60-69, C
 50-59, D
 0-49, F
*/

let marks = prompt("Enter the marks");

//Ensures marks is converted to a number

if(marks >= 80 && marks <= 100){
    console.log("Grade: A");
} else if(marks >= 70 && marks <= 79){
    console.log("Grade: B");
} else if(marks >= 60 && marks <= 69){
    console.log("Grade: C");
} else if(marks >= 50 && marks <= 59){
    console.log("Grade: D");
} else if(marks >= 0 && marks <= 49){
    console.log("Grade: F");
} else{
    console.log("Invalid marks entered");
}