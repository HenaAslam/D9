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

/*
function area(l1,l2) {
    return l1 * l2;
}
let computedArea=area(4,5);
console.log(`The area of rectangle is ${computedArea}`);
 */

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* 
function crazySum(n1,n2){
    if(n1!==n2){
        return n1+n2;
    }
    else{
        return (n1+n2)*3;
    }
}
let computedCrazySum=crazySum(6,7);
console.log(`The crazy sum is ${computedCrazySum}`);
*/

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* 
function crazyDiff(k) {
     
    if(k<=19){
        return 19-k;
    }
    else{
        return 3*(k-19);
    }
}
let computedCrazyDiff=crazyDiff(12);
console.log(`The crazy difference is ${computedCrazyDiff}`);
*/

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* function boundary(n){
    if((n>=20 && n<=100) || n===400){

        return true;

    }

    else{
        return false;
    }

}

let computedBoundary=boundary(50);
console.log(`is the number within 20 and 100 (included) or is it equal to 400: ${computedBoundary}`);

*/

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* 
function strivify(str1) {
    for(i=0;i<str1.length;i++){
        if(str1[i]==='s' && str1[i+1]==='t' && str1[i+2]==='r' && str1[i+3]==='i' && str1[i+4]==='v'&& str1[i+5]==='e' )
        {
            return str1;
        }
        else{
        return "strive"+str1;
        }

        
    }
    
}
let computedStrive=strivify("ghs");
console.log(`Strivified string is ${computedStrive}`);
*/

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* 
function check3and7(r){
    if(r<0){
        
        return "not a positive integer";
    }

    else{
        if (r%3===0 || r%7===0)
        {
            return true;
        }
        else{
            return false;
        }

    }
}
let computedCheck37=check3and7(40);
console.log(`checking if the number is a multiple of 3 or a multiple of 7: ${computedCheck37}`);

*/

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* 
let str3="";
function reverseString(str2){
    for(i=str2.length-1;i>=0;i--)
    {
        str3=str3+str2[i];
    }
    return str3;
}
let computedReverse=reverseString("strive");
console.log(`Reversed string: ${computedReverse}`);
*/

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/*
function upperFirst(str){
    let space=str.split(" ");
    for(i=0;i<str.length;i++){
        console.log(space[i][0].toUpperCase());
    }
}
let computedUpper=upperFirst("hello world");
console.log(`capitalized first letter : ${computedUpper}`);


*/
    

 

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* 
function cutString(str){
    return str.substring(1,str.length-1);
}
let computedNewString=cutString("abcdef")
console.log(`The string after deleting first and last element: ${computedNewString}`);

without using method:
delString=""
function cutString(str){
    for(i=0;i<str.length;i++){
        if(str[i]!==0 || str[i]!==str.length-1)
        {
            delString=delString+str[i];
        }
    }
    return delString;
}
let computedNewString=cutString("abcdef")
console.log(`The string after deleting first and last element: ${computedNewString}`);
*/

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* title("question 10");
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
*/

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
