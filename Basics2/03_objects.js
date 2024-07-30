

//Object literals

const myS=Symbol()

let bio={
    Name:"Subhadip",
    Age:22,
    HomeTown: "C.K.Road",
    isLoggedIn:false,
    "Full-Name":"Subhadip Patra",
    [myS]:"key",
    Email:undefined
}

// console.log(bio.HomeTown,bio["Full-Name"]) //We can access the objects in two different way
// console.log(bio[myS])



bio.Email="subhadip@gmail.com"

// Object.freeze(bio);
// console.log(bio)

bio.greeting=function () {
    console.log("Hello");
}
bio.greeting1=function(){
    console.log(`hello ${this.Name}`)
}

console.log(bio.greeting1())