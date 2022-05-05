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