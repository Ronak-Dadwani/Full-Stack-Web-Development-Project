/// Question 1 answer

// Type conversion

// function ConvertToNumber(str) {
//     let num = Number(str) ;
//     if(isNaN(num)) {
//         throw new Error("invalid number")
//     }
//     return num;
// }

// const str1 = "123"
// const num1 = ConvertToNumber(str1);
// console.log(num1); //output

// const str2 = "hello"
// try {
// const num2 = ConvertToNumber(str2)
// console.log(num2);
// } catch (error) {
// console.log(error.message);
// }

//----------------------------------------------------------------------------------------------

// Question 2 answer

// Building Robust function javascript

// function getPerson(person) {
//   try {
//     if (typeof person !== "object" || !person.name || !person.age) {
//       throw new Error("Invalid Parameter Type");
//     }
//     return ` Name:  ${person.name}  Age: ${person.age}`;
//   } catch (error) {
//     return error.message;
//   }
// }

// const person1 = { name: "Mithun", age: 20 };
// console.log(getPerson(person1));

// const person2 = { name: "Mithun" };
// console.log(getPerson(person2));

// const person3 = ["name ", " mithun"];
// console.log(getPerson(person3));


//---------------------------------------------------------------


// Question 3 answer

// Car Description class

// class car {
//     constructor (company , model , year) {
//         this.company = company
//         this.model = model
//         this.year = year
//     }

//     getDescription () {
//         return `This is a ${this.year} ${this.company} ${this.model}.`;
//     }
// }


// const myCar = new car('Toyato' , 'Fortuner' , 2015)
// console.log(myCar.getDescription());

//----------------------------------------------------------------------------------------------------

// Question 4 answer

//Employee class challenge

// class Employee {
//     constructor (name , position , salary ) {
//         this.name = name
//         this.position = position
//         this.salary = salary
//     }

//     getSalary() {
//         return this.salary;
//     }
// }

// const employee1 = new Employee('Ronak' , 'Fresher' , 50000) 
// console.log(employee1.getSalary());

//--------------------------------------------------------------------------------

// Question 5 answer

//Implementing a Person Class with Default Values

// class Person {
//     constructor (name , age) {
//         this.name = name ? name : 'Unknown';
//          this.age = age ? age : 0;

//     }

//     getDetails() {
//         return `Name: ${this.name} , Age: ${this.age}`;
//     }
// }

// const Person1 = new Person("Ronak" , 20);
// console.log(Person1.getDetails());

// const person2 = new Person();
// console.log(person2.getDetails());

//-----------------------------------------------------------------------------------


//question 6 answer

// Using Static Method to Add Two Numbers with Calculator Class

// class Calculator {
//     static add(num1 , num2) {
//         return num1 + num2 ; 
//     }
// }

// //Instantiating the calculator class and calling the add method

// const result = Calculator.add(5 , 7)
// console.log(result);


//-------------------------------------------------------------------------------------

// Question 7 answer 

// Password Checker.

// class User {
//     constructor(username , password) {
//         this._username = username;
//         this._password = password;
//     }

//     get password() {
//         return this._password.replace(/./g, '*'); //replace all character
//     }

//     set password(newPassword) {
//         if (newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)) {
//             this._password = newPassword;
//             console.log('Password Successfully changed');
//         } else {
//             console.error('Invalid Password. Must be at least 8 characters long and contains at least one number and one uppercase letter .');
//         }
//     }
// }

// const user1 = new User("Ronak" , "Password1")
// console.log(user1.password); //output :*********

// user1.password = "weak";

//output :  Invalid Password. Must be at least 8 characters long and contains at least one number and one uppercase letter .

// user1.password = "password";

//output: Invalid Password. Must be at least 8 characters long and contains at least one number and one uppercase letter .

// user1.password = "BetterPassword2"
//output : Password Successfully changed

// console.log(user1.password);  //output : ***************

//----------------------------------------------------------------------------------------------------------------------------------

// Question 8 answer 


//Adding a Method to a Prototype.

//creating prototype object called "student"

// function Student(name) {
//     this.name = name;

// }

// Adding method "printdetails" to the prototype of "student"

// Student.prototype.printDetails = function() {
//     console.log("Hello , the student is " + this.name);
// }

//Instantiating a new "Student" object the name "Ronak"

// const student = new Student("Ronak") ;

// calling thr "printdetails " method on the "student " object

// student.printDetails();

//--------------------------------------------------------------------------------------------------------------

// Question 9  answer 

// Check the presence using closures.

// function createNumberChecker (numbers) {
//     return function(number) {
//         return numbers.includes(number) ;
//     }
// }

// const Numbers = [1 , 2,  ,3 , 4 , 5 ] ;
// const checkNum = createNumberChecker(Numbers);

// console.log(checkNum(3)); //output : true
// console.log(checkNum(6)); // output : false

//---------------------------------------------------------------------------------------------------

// Question 10 answer

// Filter by Category.
// function createProductFilter(products) {
//     return function(category) {
//         return products.filter(products => products.category === category) ;
//     }
// }

// const products  = [
//     {name : "shirt" , category: "Clothing"},
//     {name : "Sneakers" , category: "Footwear"},
//     {name : "Phone Case" , category: "Accessories"},
//     {name : "Backpack" , category: "Bags"},
// ] ;

// const filterByCategory = createProductFilter(products);

// const ClothingProducts = filterByCategory("Clothing") ;
// console.log(ClothingProducts);
// output ; [{name ; "shirt" , category ; "clothing"}]

//-------------------------------------------------------------------------------------------------------