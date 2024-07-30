
let male=new Array("Ashoke","Arun","Arup")
let female=new Array("Anita","Amita","Aparajita")
// male.push(female) //instead of push we can use concate

let newarr=male.concat(female) //

//use spread method 

let family=[...male,...female] //will return same as concate method


// use    flat,isarray,from,of    method

console.log(family)