
function title(titleString){
    console.log(`\n ${titleString} \n`);
}

title("question1")
function area(l1,l2) {
    return l1 * l2;
}
let computedArea=area(4,5);
console.log(`The area of rectangle is ${computedArea}`);

title("question2");
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



title("question3");
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

title("question4");
function boundary(n){
    if((n>=20 && n<=100) || n===400){

        return true;

    }

    else{
        return false;
    }

}

let computedBoundary=boundary(50);
console.log(`is the number within 20 and 100 (included) or is it equal to 400: ${computedBoundary}`);


title("question5");
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
let computedStrive=strivify("fjkhkjdh");
console.log(`Strivified string is ${computedStrive}`);


title("question6");
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

title("question7");
let str3="";
function reverseString(str2){
    for(i=str2.length-1;i>=0;i--)
    {
        str3=str3+str2[i];
    }
    return str3;
}
let computedReverse=reverseString("hena");
console.log(`Reversed string: ${computedReverse}`);


/*title("question8");
function upperFirst(str){
    let space=str.split(" ");
    for(i=0;i<str.length;i++){
        console.log(space[i][0].toUpperCase());
    }
}
let computedUpper=upperFirst("hello world");
console.log(`capitalized first letter : ${computedUpper}`);*/




title("question 9")
function cutString(str){
    return str.slice(1,str.length-1);
}
let computedNewString=cutString("abcdefahsjhsj")
console.log(`The string after deleting first and last element: ${computedNewString}`);

title("question 10");
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

title("question1 extra");
function checkArray(array1){
    let sum=0;
    for(i=0;i<array1.length;i++){
      
        if(array1[i]>5){
            console.log(array1[i], "is greater than 5");
            sum+=sum+array1[i];
            

        }
        else{
            console.log(array1[i], "is less than five");
        }
        
    }
    return sum;
}
let computedFive=checkArray(giveMeRandom(6));
console.log(`The result:${computedFive}`);


title("question2 extra");
let cost=0;
function shoppingCartTotal(array1){
    for(let i=0;i<array1.length;i++){
        let item=array1[i];
        cost+=item.price*item.quantity;

    }
    return cost;
}


title("question 3 extra");
let shoppingCart=[]
function addToShoppingCart(obj){
    shoppingCart.push(obj);
    return shoppingCart.length

}
