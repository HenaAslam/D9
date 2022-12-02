// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

/* 
function checkArray(array1){
    let sum=0;
    for(let i=0;i<array1.length;i++){
      
        if(array1[i]>5){
            console.log(array1[i], "is greater than 5");
            sum=sum+array1[i];
            

        }
        else{
            console.log(array1[i], "is less than five");
        }
        
    }
    return sum;
}
let computedFive=checkArray(computedArray);
console.log(`The result:${computedFive}`);
 */

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

/* 
let shoppingCart=[{price:50, name:"phone", id:1 ,quantity:2},
{price:200, name:"laptop", id:2 ,quantity:4},
{price:60, name:"airpods", id:3 ,quantity:2}]

cost=0;
function shoppingCartTotal(array1)
{
    
    for(let i=0;i<array1.length;i++)
    {
        let item=array1[i];
        cost=cost+(item.price*item.quantity);

    }
    return cost;
}

shoppingCartTotal(shoppingCart);
console.log(cost);

*/

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* 
let shoppingCart=[{price:50, name:"phone", id:1 ,quantity:2},
{price:200, name:"laptop", id:2 ,quantity:4},
{price:60, name:"airpods", id:3 ,quantity:2}];



function addToShoppingCart(obj){
    shoppingCart.push(obj);
    return shoppingCart.length

}

let number=addToShoppingCart({price:50, name:"phone", id:1 ,quantity:2});
number=addToShoppingCart({price:50, name:"phone", id:1 ,quantity:2});
console.log(`The number of items in cart: ${number}`);

*/

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* 
let shoppingCart=[{price:50, name:"phone", id:1 ,quantity:2},
{price:200, name:"laptop", id:2 ,quantity:4},
{price:6000, name:"airpods", id:3 ,quantity:2}];


//expItem=0;
function maxShoppingCart(array){
    expItem=0;
    for(i=0;i<shoppingCart.length;i++){
        let item=shoppingCart[i];
        if(item.price>expItem){
            expItem=item.price;
        }

    }
    return expItem;
}

let exp=maxShoppingCart(shoppingCart);
console.log(`The most expensive item is ${exp}`);
 */

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
