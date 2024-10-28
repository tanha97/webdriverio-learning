// Inheritance is the main pillar of object oriented programming, 
//where one class can inherit /acquire the properties, methods of another class
// The class which inherits the properties of others is known as Sub class( derived class, child class)
// The class whose properties are inherited is known as superclass.
const Person= import ("./basics7")
class Pet extends Person
{
constructor(firstName,lastName)
{
   super(firstName,lastName)
}

}

let pet= new Pet("Muzz", "Sam")
pet.fullName()
console.log(pet.location)