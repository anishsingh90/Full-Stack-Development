/*Qs. For a given array with marks of 
students -> [85, 97, 44, 37, 76, 60].
Find the average marks of the entire class.
*/

let studetsMarks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for(let i=0; i<studetsMarks.length; i++){
    sum += studetsMarks[i];
}
console.log("Avg. marks of students are:",sum/studetsMarks.length);