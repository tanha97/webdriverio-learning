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

let numbers=[10,45,2,14,25]
console.log(numbers.sort())

/**
 * Sorting Process for Array: [10, 45, 2, 14, 25]
 * Using comparison function: (a, b) => a - b
 *
 * Initial Array: [10, 45, 2, 14, 25]
 *
 * 1. Compare 10 and 45:
 *    Calculation: 10 - 45 = -35
 *    Result: -35 (10 comes before 45)
 *
 * 2. Compare 10 and 2:
 *    Calculation: 10 - 2 = 8
 *    Result: 8 (2 comes before 10)
 *
 * 3. Compare 45 and 2:
 *    Calculation: 45 - 2 = 43
 *    Result: 43 (2 comes before 45)
 *
 * 4. Compare 45 and 14:
 *    Calculation: 45 - 14 = 31
 *    Result: 31 (14 comes before 45)
 *
 * 5. Compare 45 and 25:
 *    Calculation: 45 - 25 = 20
 *    Result: 20 (25 comes before 45)
 *
 * 6. Compare 10 and 14:
 *    Calculation: 10 - 14 = -4
 *    Result: -4 (10 comes before 14)
 *
 * 7. Compare 14 and 2:
 *    Calculation: 14 - 2 = 12
 *    Result: 12 (2 comes before 14)
 *
 * 8. Compare 14 and 25:
 *    Calculation: 14 - 25 = -11
 *    Result: -11 (14 comes before 25)
 *
 * 9. Compare 10 and 25:
 *    Calculation: 10 - 25 = -15
 *    Result: -15 (10 comes before 25)
 *
 * 10. Compare 2 and 14:
 *     Calculation: 2 - 14 = -12
 *     Result: -12 (2 comes before 14)
 *
 * Final Sorted Array: [2, 10, 14, 25, 45]
 */

console.log(numbers.sort((a,b)=>a-b))
console.log(numbers) 