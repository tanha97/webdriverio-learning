//Object oriented programming

class Person {
  age = 25
  //location= "Bangladesh"
  get location() {
    return 'Bangladesh'
  }

  //Constructor is method which executes by default when you create object in the class.

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName() {
    console.log(this.firstName, this.lastName)
  }
}
let person = new Person("Md.Amirul", "Islam")
let person1 = new Person("Sumaiya", "Shoily")

person.fullName()

console.log(person.age)
console.log(person.location)

let person2 = new Person()
console.log(person.age)
console.log(person2.age)

person.age = 30

console.log("after change person age")
console.log(person.age)
console.log(person2.age)

//Example-2

class Mobile {
    constructor(brand_name, display, ram) {
      this.brand = brand_name
      this.display = display
      this.ram = ram
      this.created_at = new Date()
    }
    info(){
      console.log(this.brand , this.display, this.ram)
    }
  }
  
  let m1 = new Mobile('Samsung', 5.5, 6)
  let m2 = new Mobile('Xiaomi', 5.57, 8)
  
  console.log(m1.created_at)
  console.log(m2.created_at)
  
  m1.info()
