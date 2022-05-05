
//1st way
//let marks1 = Array(6)

//2nd way
//let marks2 = new Array(10,20,30,40,50,60)

//3rd way
let marks3 = [11,22,33,44,55,66]
console.log("marks3: "+marks3) //11,22,33,44,55,66

console.log("push() will add the element at last index in the Array")
marks3.push(77)
console.log("marks3: "+marks3) //11,22,33,44,55,66,77

console.log("pop() will delete the last added element in the Array")
marks3.pop()
console.log("marks3: "+marks3) //11,22,33,44,55,66

console.log("Success")