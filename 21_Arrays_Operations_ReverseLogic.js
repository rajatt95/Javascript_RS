// Multiply the elements by 3
let numberArray = [11,44,003,22,55,33]

console.log("numberArray: "+numberArray) //11,44,3,22,55,33

// Not working as expected
console.log("numberArray.sort(): "+numberArray.sort()) //11,22,3,33,44,55

//Working as expected
// Here, we are looking for minimum difference between 2 elements present in the Array
console.log("numberArray.sort((a,b) => b-a): "+numberArray.sort(
    //(a,b) => a-b
    (a,b) => b-a
)) //55,44,33,22,11,3
console.log("Success")
