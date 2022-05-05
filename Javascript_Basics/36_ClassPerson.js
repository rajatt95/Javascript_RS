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
