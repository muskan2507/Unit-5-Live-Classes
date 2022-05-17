const myname: string="Muskan"
const myage: number=12
// console.log(myname)
// console.log("Hello")
const arr:number[]=[1,2,3]
function sum(a:number,b:number){
    return a+b
}
let x =sum(1,2)
// console.log(x)
const sum1=(a:number,b:number):number=>{
    return a+b
}

type User={
    username:string;
    age:number;
    salary?:boolean; //optiona;
    animal:Human;
};
type Human ={
    veg:boolean
}
const masai:User ={
    username:"Muskam",
    age:12,
    animal:{
        veg:true
    }
}
const user1:User={
    age:22,
    username:"loka",
    animal:{
        veg:false
    },
    salary:true
}
// console.log(masai)
// console.log(user1)

// interface Animal {
//     legs:number;
// }
// interface Pet extends Animal {
// food:string;
// }
// const Dog:Pet ={
//     food:"KoKo",
//     legs:3
// }
// console.log(Dog)

type Animal={
legs:number;
}
type Pet ={
    food:string;
}
const Dog:Animal & Pet ={
    food:"koko",
    legs:3
}
// console.log(Dog)
const mypets:Pet[]=[{food:"koko"}]
console.log(mypets)