let cart=[
    {
        courseName: "Data Analyst",
        coursePrice:2399

    },
    {
        courseName: "Data Science",
        coursePrice:2699

    },
    {
        courseName: "Mobile Development",
        coursePrice:2399

    },
    {
        courseName: "IOS Development",
        coursePrice:2399

    }
]

let cartPrice=cart.reduce((acc,item)=>acc+item.coursePrice,0)
console.log(cartPrice)