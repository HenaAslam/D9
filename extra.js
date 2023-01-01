// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/
let randomArray=[];
function giveMeRandom(n)
{
    
    for(let i=0;i<n;i++)
    {
        randomArray.push(Math.floor(Math.random() * 10));
    }

    return randomArray;

}
let computedArray=giveMeRandom(6);
console.log(`The random numbers are: ${computedArray}`);



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




/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/
let shoppingCart=[{price:50, name:"phone", id:1 ,quantity:2},
{price:200, name:"laptop", id:2 ,quantity:4},
{price:60, name:"airpods", id:3 ,quantity:2}]


const shoppingCartTotal=function(arr){
    let cost=0;
    for(i=0;i<arr.length;i++){
        let item=arr[i];
        cost=cost+(item.price*item.quantity)

}
return cost    
}
let totCost=shoppingCartTotal(shoppingCart)
console.log(`${totCost}`)

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

const addToShoppingCart=function(arr,obj){
    arr.push(obj)
    return arr.length
}
let totPro=addToShoppingCart(shoppingCart,{price:10,name:"earphones",id:7,quantity:1})
console.log(totPro)


/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/
let ourItem={};
let max=0;
const maxShoppingCart=function(arr){
for(i=0;i<arr.length;i++){
    let item=arr[i];
    if(item.price>max){
        max=item.price
        Object.assign(ourItem,arr[i])
    }
    

}
return ourItem.name
}
let maxPro=maxShoppingCart(shoppingCart)
console.log(maxPro)

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
const latestShoppingCart=function(arr){
return arr[arr.length-1]
}

let last=latestShoppingCart(shoppingCart)
console.log(last)

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

// function loopUntil(x){
//     count=0;
//     while(count!=3){
//         currentnumber = Math.round(Math.random()*10);
//         if(currentnumber>x){
//             count++;
//         }else{
//             count=0;
//         }
//         console.log(Math.round(Math.random()*10)," ",count)
//     }
// }

const loopUntil=function(x){
    count=0;
    while(count!=3){
        rand=Math.floor(Math.random()*10)
        if(rand>x){
            count++
        }
        else{
            count=0
        }
        console.log(rand)
    }
}
const loop = loopUntil(4);
console.log(loop);

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/


const average=function(arr){
    let sum=0;
    count=0;
    let avg;
    for(i=0;i<arr.length;i++){
        let item=arr[i];
        if(typeof arr[i]==='number'){
             sum=sum+arr[i]
            count++
        }
    }
    avg=sum/count
    return avg
}
let a=average([1,2,3,4,"hello",5])
console.log(a)
/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

const longest=function(arr){
    let len=0
    let str=""
    for(i=0;i<arr.length;i++){
        let item=arr[i]
        if(item.length>len){
            len=item.length
            str=item
        }
    }
    return str
}
let long=longest(["hello","hena","dfghjfghj"])
console.log(long)
/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

const antiSpam=function(str){
    let count=0;
let word=str.split(" ")
for(i=0;i<word.length;i++){
    if(word[i]==="SPAM" || word[i]==="SCAM"){
        count++
    }
    else{
        count=0
    }
}
if(count===0){
    return true
}
else{
    return false
}
}
let sp=antiSpam(" hello world ")
console.log(sp)

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

const days=function(date){
    let today=new Date();
    let givendate= new Date(date);
    return Math.round(Math.abs((givendate-today)/(24*60*60*1000)))

}
let day=days("2022-12-01")
console.log(day)

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

const matrixGenerator=function(x,y){
    let arr=[]
    let str;
    for(i=0;i<x;i++){
        for(j=0;j<y;j++){
            str="'"+i+j+"'"
            arr.push(str)
        
        }
    }
    
    console.log(arr)
}
const mat = matrixGenerator(2,3);
console.log(mat);
/*
function matrixGenerator(x,y){
    
}
*/

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
