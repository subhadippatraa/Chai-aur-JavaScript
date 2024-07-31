// For of 

let arr= new Array(1,2,3,4,5,6,7)
// console.log(arr.length)

// for(let num of arr){ //iteratate through each element
//     console.log( num) // They are number in for of
// }

// for(let num in arr){
//     console.log( num) // They are string in for in
// }

//Map

let myMap=new Map

myMap.set('a',"apple")
myMap.set('b',"ball")

myMap.set('c',"cat")

myMap.set('d',"Dog")
// console.log(myMap)

for(let [key,value] of myMap){ // just like iterator in c++
    console.log(`${key}-${value}`)
}


let myObj=new Object

myObj.name="subha"
myObj.email="subhadip@gmail.com"
// console.log(myObj)

// with for we can't iterate in object

// for(let [key,value] of myObj){ 
//     console.log(`${key}-${value}`)
// }




