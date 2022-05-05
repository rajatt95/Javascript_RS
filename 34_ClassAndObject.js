class Person{

    firstName ='Rajat'
    lastName ='Verma'
    country= 'India'
    age=27

    getAllDetails(){
        return (this.firstName + " " + this.lastName + " "+this.country+" "+this.age)
    }
}

let person_obj = new Person()
console.log("person_obj.firstName: "+person_obj.firstName)
console.log("person_obj.lastName: "+person_obj.lastName)
console.log("person_obj.country: "+person_obj.country)
console.log("person_obj.age: "+person_obj.age)

console.log("person_obj.getAllDetails(): "+person_obj.getAllDetails())