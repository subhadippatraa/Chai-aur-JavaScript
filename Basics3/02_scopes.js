
const a=10 
let b=20
var c=30       //This is different we should avoid var keyword as it causes many problem
{
    //This is scope space 
}

// Nothing Much just like Local and Global Variable

// console.log(addOne(5)) // WE can do this 

function addOne(num1){
    return num1+1
}

// console.log(addTwo(10)) //This will throw an error
const res=function(num){       //We can also declare function like this 
    return num+2
}
res(10)

// console.log(res)