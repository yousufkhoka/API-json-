
const user = {
    id:1212,
    name:"kamal",
    age:23,
    fridendAge:[23,21,24,22,25],
    destFrend:{
        name:"jamal",
        age:23,
        id:2323
    }
 }
console.log(user)
const userJson = JSON.stringify(user)
console.log(userJson)
const userFormJson = JSON.parse(userJson)
console.log(userFormJson)