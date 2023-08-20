// const obj1 = {
//     name: "ronak" , 
//     role: "student",

//     isloggedIn: true ,

//     registrUser: function () {

//         console.log(`${this.name} is a registerUser! } `);
//     }
// }

// // console.log(obj1.name);
// // console.log(obj1.role);

// const obj2 = {
//     10: "number",
//     20: "number20"
// }


// // const key1 = Symbol()  
// const key1 = Symbol("ronak")  
// const key2 = Symbol("key2")  

// const obj3 = {
//         [key1] : "RONAK" ,     
//         [key2] : "HITESH" ,     

// }

// console.log(obj3);
// console.log(obj3[key1]);

// const obj4 = new object ()
// obj4.email = "hitesh@pwskills.com"

obj5 = {
    name: "shreya" ,
    email: "shreya@google.com",
    isloggedIn: "true"
}

Object.freeze(obj5)
obj5.email = "shreya@microsoft.com"
obj5["isloggedIn"] = false



console.log(obj5);
console.log(Object.keys(obj5));
console.log(Object.values(obj5));
