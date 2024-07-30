//Dates in JavaScript

let myDate=new Date()

// console.log(myDate.toDateString())


// console.log(myDate.toISOString())

// console.log(myDate.toLocaleDateString())

// console.log(myDate.toLocaleString())

let newDate=new Date(2024,2,12) //(year,month,date) to remember months starts from 0
// console.log(newDate.toDateString())

let date1=new Date("03-12-2001")
// console.log(date1.toLocaleString())

console.log(date1.getDate()) //also use months and other methods


let newTimeSt= Date.now()
// console.log(newTimeSt)