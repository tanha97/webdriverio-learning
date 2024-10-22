// Object is a collection of properties

let person=
{
     firstName:'Tanha',
     lastName :'Tahity'
}

console.log(person.firstName) //dot notation
console.log(person['lastName'])// Array notation
console.log(person.firstName= "Barsha") // Update properties
person.gender="Female"
console.log(person) //Add properties
delete person.gender
console.log(person) // Delete properties

