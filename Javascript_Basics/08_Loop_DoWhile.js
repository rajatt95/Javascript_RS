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

let num1=1

//In Do-While Loop, 1 round will execute for sure
do{
    console.log(num1)

    //Post-increment
    num1++
}while(num1<11)

console.log("------------------")

num1=1
//In Do-While Loop, 1 round will execute for sure
do{
    console.log(num1)

    //Post-increment
    num1++
}while(num1<1) //Even if the condition is false, Code inside the do section executed for one time.

console.log("Success")