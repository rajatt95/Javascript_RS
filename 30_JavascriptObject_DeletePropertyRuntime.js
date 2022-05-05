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
