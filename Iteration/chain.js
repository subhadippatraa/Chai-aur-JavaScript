const myArr=new Array(1,2,3,4,5,6,7)

const newArr=myArr
        .map((num)=>num*10)
        .map((num)=>num+1)
        .filter((num)=>num>50)
console.log(newArr)