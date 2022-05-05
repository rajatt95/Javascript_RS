//class Person{
// This will make class Person as public and anyone can use this now
module.exports =  class Person{
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
