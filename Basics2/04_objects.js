//Singleton Objects

let user1= new Object();
user1.name="Your Name"
user1.age=21
user1.email="your-email@gmail.com"
// console.log(user1)

let obj1={
    1:"a",
    2: "b"
}
let obj2={
    3:"c",
    4:"d"
}

//  let obj3=Object.assign({},obj1,obj2)     //This is how we combine Objects
 let obj4={...obj1,...obj2} //More 

//  console.log(obj4)


// console.log(Object.keys(user1)) //create an array of keys

// console.log(Object.values(user1))

// console.log(user1.hasOwnProperty("email"))

let {email:em}=user1 //destructuing of objects
// console.log(email)
// console.log(em)
