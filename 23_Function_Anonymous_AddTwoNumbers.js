
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
