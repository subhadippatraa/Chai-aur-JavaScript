const coding =["C++","Java","Python","Ruby","Swift"]

const myNum=new Array(1,2,3,4,5,6,67,78,90)

// const newNum=myNum.filter(   (key)=>{
//     // console.log(key)
//     return key>4
// })


//using for each method

const newNum=[]
myNum.forEach((key)=>{
    if(key>4){
        newNum.push(key)
    }
})
console.log(newNum)