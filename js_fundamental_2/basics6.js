// Object is a collection of properties

let person=
{
     firstName:'Tanha',
     lastName :'Tahity',
     age: 27,
     fullName: function()
     {
          return this.firstName+" "+this.lastName

     }
}

console.log(person.fullName())
console.log(person.firstName) //dot notation
console.log(person['lastName'])// Array notation
person.firstName= "Barsha" // Update properties
person.gender="Female"
console.log(person) //Add properties
delete person.gender
console.log(person) // Delete properties

//Print all the value of the javascript object

for(let key in person)
{
    
    if(key=='fullName') 
    {
      console.log(person[key]())
    }
    
    else
    {
     console.log(person[key])
    }
}




