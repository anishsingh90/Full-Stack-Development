/*Qs. For a given array with prices of items -> [250, 645, 300, 900, 50].
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.
*/

let itemsPrice = [250, 645, 300, 900, 50];

//array to store final prices after the discount
let newItemPrice = [];

for(let i=0; i<itemsPrice.length; i++){
    //calculate 10% discount
    let discount = itemsPrice[i] * 0.10;

    //Subtract discont and store final price
    newItemPrice[i] = itemsPrice[i] - discount;
}

//Final prices
for(let i=0; i<newItemPrice.length; i++){
    console.log(newItemPrice[i]);
}
