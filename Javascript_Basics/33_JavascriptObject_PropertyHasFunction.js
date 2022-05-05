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
     country:'India',
     fullName:function(){
        return (this.firstName+" "+this.lastName)
    }
}
console.log("person.fullName()): "+person.fullName())

