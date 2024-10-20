// A block of code can be executed together by wrapping them in a module called function.

function add(a,b)
{
    return a+b
}

let sum=add(3,4)
console.log(sum)

// Do not have name= Anyonymus function--- Function expressions

let sumOfIntegersNumbers=function(c,d)
{
   return c+d
}

let sumNumbers=(c,d)=>c+d
console.log(sumNumbers(3,4)) // Function write in one line

// Var, let & Const difference
 let greet="Morning"
 greet="Evening"

 function subtract(x,y)
 {
    let greet="Afternoon"
 }
 console.log(greet)// Var is not printed in function block & let is only printed in globally

 if(1==1)
 {
    let greet="Night"
 }
console.log(greet) // Var is print in if block, for block

/* Var can be redeclare and reassigned. Var is printed in globally and if , for loop block, 
can not printed in function block
**let can not be redeclare but can be reassigned, and printed in globally.
**const can not be redeclare and reassigned*/

