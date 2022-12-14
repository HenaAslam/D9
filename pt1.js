/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

const area=function(l1,l2){
    return l1*l2

}
console.log(area(6,3))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum=function(a,b){
if(a!=b){
    return a+b
}
else{
    return (a+b)*3
}
}
let computedCrazySum=crazySum(1,1)
console.log(`${computedCrazySum}`)
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff=function(n){
    if(n<=19){
        return Math.abs(19-n)
    }
    else{
        return Math.abs(19-n)*3
    }
}
let computedCrazyDiff=crazyDiff(20)
console.log(`${computedCrazyDiff}`)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary=function(n){
    if((n>=20 && n<=100)||n===400){
        return true
    }
    else{
        return false
    }
}

console.log(boundary(4))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify=function(str){
    if(str.startsWith("Strive")){
        return str
    }
    else{
        return "Strive " +str
    }
}

console.log(strivify("Hena"))
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7=function(n){
    return n%3===0 || n%7===0 ? true :false
}
console.log(check3and7(21))
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
let reversedString=""
const reverseString=function(str){
    for(i=str.length-1;i>=0;i--){
        reversedString=reversedString+str[i]
    }
    return reversedString
}
// const reverseString=function(str){
//     return str.split("").reverse("").join("")
// }
console.log(reverseString("hello world"))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFirst=function(str){
    let word=str.split(" ");
    for(i=0;i<word.length;i++){
        word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1);
    }
    return word.join(" ")
   
}

console.log(upperFirst("hello world"))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString=function(str){
    return str.slice(1,str.length-1)
}
console.log(cutString("hello world"))// or substring

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
returnArray=[];
const giveMeRandom=function(n){
   
    for(i=0;i<n;i++){
    returnArray.push(Math.floor(Math.random()*11))
    }
    return returnArray

}
console.log(giveMeRandom(6))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
