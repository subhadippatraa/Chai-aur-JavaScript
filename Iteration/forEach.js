const coding =["C++","Java","Python","Ruby","Swift"]

// coding.forEach(function (key){     //As this is a call back function that's why it didn't have a name
//     console.log(key ,key.length)
// })


//Using arrow Function

// coding.forEach( (key)=>{
//     console.log(key ,key.length)
// })


const myCoding=[
    {
        languageName: "JavaScript",
        format:"js"
    },
    {
        languageName: "Java",
        format:"java"
    },
    {
        languageName: "CPP",
        format:"c++"
    }
]
myCoding.forEach( (key)=>{
    console.log(key.format,key.languageName,)

})