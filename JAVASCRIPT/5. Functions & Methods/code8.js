//Filter method

let num = [1, 2, 3, 4, 5, 6, 7];

let evenItem = num.filter((val)=>{
    return val % 2 === 0;
})

console.log(evenItem);