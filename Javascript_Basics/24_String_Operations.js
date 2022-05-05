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


//Both Single cort and double corts
let stringValue='Test Automation Engineer'

console.log("stringValue.length: "+stringValue.length) //24

console.log("stringValue.charAt(0): "+stringValue.charAt(0)) //T
console.log("stringValue.charAt(0): "+stringValue.charAt(2)) //s

console.log("stringValue.slice(0,4): "+stringValue.slice(0,4)) //Test

console.log("indexOf() - START")
console.log("stringValue.indexOf('A'): "+stringValue.indexOf('A')) //5
console.log("stringValue.indexOf('e'): "+stringValue.indexOf('e')) //1
//e is present 3 times in the given String -> I want to start search from index 4, then
console.log("stringValue.indexOf('e',4): "+stringValue.indexOf('e',4)) //21

//If String is not found, then, it will return -1
console.log("stringValue.indexOf('z'): "+stringValue.indexOf('z')) //-1

console.log("indexOf() - END")

console.log("stringValue[2]]: "+stringValue[2]) //s

console.log("stringValue.split(\" \"): "+stringValue.split(" ")) //Test,Automation,Engineer

console.log("trim() - START")
let stringValueWithSpace = ' Hi Bye '
console.log("stringValueWithSpace.length: "+stringValueWithSpace.length) //8
console.log("stringValueWithSpace.trim().length: "+stringValueWithSpace.trim().length) //6
console.log("trim() - END")