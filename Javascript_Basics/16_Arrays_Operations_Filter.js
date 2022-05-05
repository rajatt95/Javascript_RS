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

// Print only even
let marks3 = [11,22,33,44,55,66]

console.log("marks3: "+marks3) //11,22,33,44,55,66

console.log("Printing only even using For loop")
for (let index = 0; index < marks3.length; index++) {
    if(marks3[index] %2 ==0){
        console.log(marks3[index]) // 22,44,66
    }
}
console.log("------------")

console.log("Printing only even using filter()")
console.log(marks3.filter(marks3 => marks3%2 ==0))

console.log("Success")