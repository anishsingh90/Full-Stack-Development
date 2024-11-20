const student = {
    fullName : "Anish Kumar",
    age : 20,
    cgpa : 8.6,
    isPass : true
};

console.log(student);
console.log(student["age"])
console.log(student.age)
console.log(student.cgpa)

student["age"] = student["age"] + 1;
console.log(student.age)