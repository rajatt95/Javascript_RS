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


//Anonymous function -> Function without name
//Anonymous function can only be assigned to variables

let sumOfTwoNumbers = function(a,b){
    sum=a+b
    console.log(a+"+"+b+" = "+sum)
    return sum
}

sumOfTwoNumbers(10,20) //10+20 = 30

console.log("-------------------")

let sumOfTwo2Numbers = (a,b) => console.log(a+"+"+b+" = "+(a+b))
sumOfTwo2Numbers(20,50)
