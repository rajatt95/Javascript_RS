const Person = require('./36_ClassPerson')

//Creating the object of class Person
let person_obj = new Person("Rajat", "Verma","India",27)
// console.log("person_obj.firstName: "+person_obj.firstName)
// console.log("person_obj.lastName: "+person_obj.lastName)
// console.log("person_obj.country: "+person_obj.country)
// console.log("person_obj.age: "+person_obj.age)

console.log("person_obj.getAllDetails(): "+person_obj.getAllDetails())


let person_obj2 = new Person("Shreya", "Sharma","India",25)
console.log("person_obj2.getAllDetails(): "+person_obj2.getAllDetails())