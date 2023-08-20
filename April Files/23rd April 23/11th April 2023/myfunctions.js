// // function sayHello () {
// //     console.log("Hello World");
// //     console.log("Ronak");
// // }

// // sayHello()  // function call

// // function addTwoNum (num1 , num2) {
// //     console.log("Ronak");
// //     let result = num1 + num2;
// //     return result
//     // console.log("Ronak"); this line will never execute because it has written after return funtion
// // }
// // after return any function is call it will not execute

// // function subtractTwoNums(num1 , num2){
// //     return   num1 - num2 ;

// // }
// // const result = subtractTwoNums(5 , 6 )
// // console.log(result);

// function registerPWUser (user= "Ronak") {
//     if (!user) {
//         return "Please pass the username"
//     }

//     return user + ' is registered at PW'
// }

// console.log(registerPWUser());

//amazon shopping cart

function cartBillTotal(...numbers) {
  //take a variable name total
  let total = 0;
  //loops all values
  for (const num of numbers) {
    total += num;
  }
  //return total

  return total;
}

const user = {
    id: "123" ,
    name: "Ronak" ,
    email: "ronak@pw.live"
}
function addUser (obj ){
    console.log(`A user name ${obj.name} got an email ${obj.email}`);
}

// addUser(user)

function addTwonumber(num1 , num2){
    return num1 + num2 ;
}

const addTwonumberv2 = (num1 , num2) => {
    return num1 + num2 ;

}

//symtax for arrow function

// function function_name  () => {

// }


// if there is a one line of code curly braces can br removed can be attched into one line

const addTwonumberv3 = (num1 , num2 ) => num1 + num2;

// implicent return 
const addTwonumberv4 = num1 => 5
const addTwonumberv5 = num1 => (
    {email: "rohit@pw.live"});






function learning() {
    console.log(this);
}

const learningTwo = () => {
    console.log(this);
}

// learning()
learningTwo()