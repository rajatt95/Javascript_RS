/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/
* 
* Course: Cypress -Modern Automation Testing from Scratch + Frameworks(https://www.udemy.com/course/cypress-tutorial/)
* Tutor: Rahul Shetty (https://www.udemy.com/user/rahul445/)
*/

/***************************************************/

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