let day='tuesday '
console.log(day.length)//8
let subDay=day.slice(0,4)
console.log(subDay) //tues
console.log(day[1]) //u
let splitDay=day.split("s")
console.log(splitDay) //['tue' ,'day']
console.log(splitDay[1].length) //4
console.log(splitDay[1].trim().length) //3

let date='23'
let nextDate='28'
let diff= parseInt(nextDate)-parseInt(date) // Convert string to integer
console.log(diff) 
diff.toString() // Convert integer to string

let newQuote=day+ "is Funday"
console.log(newQuote) 