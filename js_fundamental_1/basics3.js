let total_marks1= Array(6)
let marks= new Array(20,15,45,70,80,67)

let total_marks =[20,15,45,70,80,67,95]
let subMarks= total_marks.slice(2,5)
console.log(subMarks) 

console.log(total_marks[3]) //70
total_marks[4]=85
console.log(total_marks)  //20,15,45,70,85,67,95
console.log(total_marks.length)  //7

console.log("---------------------------")

total_marks.push(100) //Added a element at the end [20,15,45,70,85,67,95,100]
console.log(total_marks)
total_marks.unshift(10) //Added a element at the beginning [10,20,15,45,70,85,67,95,100]
console.log(total_marks) 
total_marks.pop(100) // Delete a element at the end [10,20,15,45,70,85,67,95]
console.log(total_marks)

console.log("----------------")

console.log(total_marks.indexOf(70)) //Search of index number
console.log(total_marks.includes(12)) // Search of a element

let sum=0
for(let i=0; i<total_marks.length;i++)
{
    console.log(total_marks[i])
    sum= sum+ total_marks[i]
}
console.log(sum)

//Reduce & filter map
//** Reduce Map
let total= total_marks.reduce((sum,marks)=>sum+marks,0)
console.log(total)

console.log("-----------------------------")

let scores=[12,13,14,16,18]
//create a new array with even numbers of scores array [12,14,16,18]

let evenScores=[]
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
       evenScores.push(scores[i])   
    }
}
console.log(evenScores)
//**Filter Map

let newFilterEvenScores = scores.filter(scores=>scores%2==0)
console.log(newFilterEvenScores)

//create a new array with even numbers of scores and multiply each value with 3 and sum them array
// [12,14,16,18]=> [36,42,48,54]

//**Map
let mappedArray=newFilterEvenScores.map(scores=>scores*3)
console.log(mappedArray)
let totalValue=mappedArray.reduce((sum,value)=>sum+value,0)
console.log(totalValue)

// Write above 3 functions in one line 
let scores1= [12,13,14,16,18]
let sumTotal=scores1.filter(scores1=>scores1%2==0).map(scores1=>scores1*3).reduce((sum,value)=>sum+value,0)
console.log(sumTotal)

// Sorting function

let fruits=["Banana","Mango","Apple","Lichi","Guava"]
console.log(fruits.sort())// Ascending sort
console.log(fruits.reverse()) //Descending sort

let 