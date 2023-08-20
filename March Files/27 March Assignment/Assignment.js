// Question 1 answer
// Double using callback

// function doubleArray(arr, callback) {
//   const doubledArr = arr.map((num) => {
//     return callback(num);
//   });

//   return doubledArr;
// }

// // checking the output

// const inputArr = [1, 2, 3, 4,];
// function callback(num) {
//     return num * 2 ;
// }
// const doubledArray = doubleArray(inputArr , callback); // output  2 , 4  , 6 , 8 , 10

// console.log(doubledArray);

//------------------------------------------------------------

// question 2 answer

// String manipulation

// function manipulateString (inputString , callback) {
//     const manipulatedString = inputString.toUpperCase();

//     callback(manipulatedString);
// }

// function logString (manipulatedString) {
//     console.log(`The manipulated string is : ${manipulatedString}`);
// }

//expected output

// manipulateString("hello , world!" , logString) ;

//---------------------------------------------------------------------------------------

// Question 3 Answer

// Age in days

// const person = {
//     firstName : "Ronak" ,
//     lastName : "D" ,
//     age : 20,
// };

// function ageInDays (personobject , callback) {
//     const fullName =   `${personobject.firstName} ${personobject.lastName}`
//     const ageInDays = personobject.age * 365 ;
//     callback(fullName , ageInDays) ;
// }

// function logResult (fullName  ,ageInDays){
//     console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
// }

// // expected output

// ageInDays(person , logResult)

//----------------------------------------------------------------------------------------------------------------

// Question 4 answer

//Arrange in alphabetical order

// const books = [
//     {
//         title : "The Great Gatsby" ,
//         author : "F. Scott Fitzgerald",
//         year: 1925 ,
//     },
//     {
//         title : "To Kill a mockingbird" ,
//         author : "harper Lee",
//         year : 1960,
//     } ,
//     {
//         title : "Who are YOu?",
//         author : "Geroge Orwell",
//         year : 1949 ,
//     },
//     {
//         title : "Pride and Prejudiece" ,
//         author : "Jan Austen",
//         year : 1813
//     },
// ];

// function logTitles(titles) {
//     titles.sort();
//     console.log(titles.join(", "));
// }

// function extractTitles(books , callback){
//     const titles = books.map((book) => book.title );
//     callback(titles);
// }

// extractTitles(books , logTitles)

//-----------------------------------------------------------------------------------------------0

// Question 5 answer

// Greeting Promise

// function greet(name ){
//     return new Promise((resolve) => {
//         const greeting = `Hello , ${name}!`;
//         resolve(greeting)
//     });
// }

// greet("Ronak").then((message)=> console.log(message))

//--------------------------------------------------------------------------------------------------

// question 6 answer

// Fetch results asynchronously

// async function fetchData () {
//     const response  = await
//     fetch("https://jsonplaceholder.typicode.com/todos/1 ")
//     const data = await response.json();
//     console.log(data);
// }

// fetchData();

//---------------------------------------------------------------------------------------------

// Question 7 asnwer

// Multiple request

// async function getCombineddata() {
//   const [data1, data2] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/todos/1").then((Response) =>
//       Response.json()
//     ),
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((Response) =>
//       Response.json()
//     ),
//   ]);

//   const combineddata = {
//     todo: data1,
//     post: data2,
//   };
//   return combineddata;
// }

// getCombineddata().then((data) => console.log(data));


//-----------------------------------------------------------------------------------------------------------------------------------------------
