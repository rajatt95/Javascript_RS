class Person{
    firstName
    lastName
    country
    age

    getAllDetails(){
        return (this.firstName + " " + this.lastName + " "+this.country+" "+this.age)
    }

    //Parameterized Constructor
    constructor(firstName, lastName, country, age){
        console.log("Parameterized Constructor called")
        this.firstName = firstName;
        this.lastName=lastName;
        this.country=country;
        this.age=age;
    }
}

//Creating the object of class Person
let person_obj = new Person("Rajat", "Verma","India",27)
console.log("person_obj.firstName: "+person_obj.firstName)
console.log("person_obj.lastName: "+person_obj.lastName)
console.log("person_obj.country: "+person_obj.country)
console.log("person_obj.age: "+person_obj.age)

console.log("person_obj.getAllDetails(): "+person_obj.getAllDetails())