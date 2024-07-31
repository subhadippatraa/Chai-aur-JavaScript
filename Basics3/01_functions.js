
function sayMy(){
    console.log("Say MY Name")
}
// sayMy()

// function add(num1,num2) {
//     console.log(num1+num2)
    
// }


function add(num1,num2) {
    return num1+num2
}

let res=add(3,4)
// console.log(typeof res)           //This show undefined for the first function when we are just printing the res not return confusion right!! 



function userMessage(username="Default"){ //if we don't pass any parameter then "Default " will execute
    return `${username} just log in`

}
// console.log(userMessage())


function addToCart(...num1){   // create an array of giving numbers
    return num1
}

// console.log(addToCart(200,300,434,4241))


//passing object to a function

let user={
    Name: "Subhadip",
    Price:299
}

function handleObj(anyObj){
    console.log(`User name is ${anyObj.Name} and Price is ${anyObj.Price}`)
}

// handleObj(user);

// we can also pass the object directly

handleObj({Name: "Subhadip", //The time of calling we can also directly pass the objects
    Price:299
    
})

//We can do the same with array