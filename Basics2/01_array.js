/*
//Array

->Non primitive data type
->can store different types of value like (Number,string,bool and others)
->js arrays are resizable

//Array Method





*/


// Defining an Array

let arr1=[23,42,24,52]
let arr2=["subha","subham","subhas"]

let newArr=new Array(2,3,4,5)

// console.log(newArr.length)

//Methods of array

newArr.push(12) //push to insert element in the array as we know js array is resizable

// console.log(newArr)

// newArr.pop() //will remove the last element


newArr.unshift(122) //insert the value on 0th index
newArr.shift()     // remove the value on 0th index

// console.log(newArr.includes(3))   //check that 3 is present in the array or not and gives result in boolean
// console.log(newArr.indexOf(13))  //if the value present in the arry will return the index otherwise return -1


 let arr=new Array(1,2,3,4,5,6)
 console.log("A",arr)

 //slice
   //includes 0index but excludes the last index here 3
 console.log("SLICE", arr.slice(0,3) )

 //splice

 console.log("Splice", arr.splice(1,3)) //it will change the array 

console.log(arr)
