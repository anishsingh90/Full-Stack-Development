let items = [10, 20, 30, 40, 50];

//Push new item in array
console.log("push method: ");
items.push(60);

for(let i=0; i<items.length; i++){
    console.log(items[i]);
}

//Pop items from array
console.log("pop methods: ");
items.pop(); //delete 60 from array
items.pop(); //delete 50 from array

for(let i=0; i<items.length; i++){
    console.log(items[i]);
}


//toString methods in array
console.log("toString methos: ");
items.toString();
for(let i=0; i<items.length; i++){
    console.log(items[i]);
}

