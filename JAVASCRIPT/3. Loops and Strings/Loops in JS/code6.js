//For-in Loop

let student = {
    name: "Rahul Kumar",
    age: 22,
    cgpa : 7.5,
    isPass : true
};

for(let i in student){
    console.log(i, " : ", student[i]);
}