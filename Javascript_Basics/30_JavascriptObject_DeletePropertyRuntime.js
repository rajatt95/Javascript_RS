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

//Object -> It is a collection of properties

let person ={
    firstName:'Rajat',
    lastName:'Verma',
    country:'India'
}

console.log("person.firstName: "+person.firstName)
console.log("person.lastName: "+person.lastName)
console.log("person.country: "+person.country)

//Adding the property gender into Javascript Object person
person.gender='Male'
console.log("person.gender: "+person.gender)

console.log("-----------------")

//Deleting the property gender from Javascript Object person
delete person.gender

console.log("person.firstName: "+person.firstName)
console.log("person.lastName: "+person.lastName) 
console.log("person.country: "+person.country)
console.log("person.gender: "+person.gender)
