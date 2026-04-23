function myRest(...args){
    console.log(args)
}
myRest(1,2,3,4,5,6)


function sum(...numbers){
 return numbers.reduce((total,sum)=>total+sum,0)
}

console.log(sum(1,2,3,4,5))



function greet(greeting , ...names){
 return `${greeting}, ${names.join(' and ')}`
}

console.log(greet('Aditi','Ayushi','Arpita'))


//filtering properties 


const {a, ...args}= {a:1, b:2,c:3}

console.log(a)
console.log(args)


const[x, ...rest]=[1,2,3,4]
console.log(x)
console.log(rest)


function mul(factor, ...nums){
    return nums.map((nums)=>factor*nums)
}

console.log(mul(2,1,2,3,4))


