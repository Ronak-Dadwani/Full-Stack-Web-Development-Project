// Question 1 Reverse string

const input = "Hello ,  World";

setTimeout(() => {
  const reversed = input.split("").reverse().join("");
  // console.log(reversed);
}, 2000);
//+++++++++++++++++++----------------------------------------

// Question 2 answer Random Number Generator with Delay and Progress Indication:

const delay = 3; // Delay in seconds before generating the random number
let remainingTime = delay; // Initialize remaining time to delay

// Countdown loop
const intervalId = setInterval(() => {
  console.log(`Time remaining: ${remainingTime} second(s)`);
  remainingTime -= 1;
  if (remainingTime === 0) {
    clearInterval(intervalId);
    // Generate random number after the delay
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number generated: ${randomNumber}`);
  }
}, 1000); // Wait for 1 second (1000 milliseconds)
// -------------------------------------------------------------------------------------------------

// {Question 3 Answer } Build a feature for Store's Inventory.

//++++++++++++++++++++++==========================================
const exchangeRate = 80; //1 USD = 80 INR

const items = {
  item1: 10, // price in USD
  item2: 20,
  item3: 30,

  //more items...
};

const pricesInRupees = Object.entries(items).map(([itemName, priceInUSD]) => {
  const pricesInRupees = priceInUSD * exchangeRate;
  return [itemName, pricesInRupees];
});

const pricesObjectRupees = Object.fromEntries(pricesInRupees);

// console.log(pricesObjectRupees);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// question 4 answer Filtering and Capitalizing: Books Published After 2010 with Author Names.

const books = [
  { title: "The Hunger games", author: "suzanne collins", year: 2008 },
  {
    title: "Harry potter and the pholosopheer's stone",
    author: "j.k. rowling",
    year: 1997,
  },
  { title: "To kill a Mockingbird", author: "harper lee", year: 1960 },
  { title: "1964", author: "george orwell", year: 1949 },
  { title: "Life after Life", author: "kate Atkinson", year: 2013 },
  { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
  //more books
];

const filterAndTransformedBooks = books
  .filter((book) => book.year <= 2010)
  .map((book) => ({ title: book.title, author: book.author.toUpperCase() }));

// console.log(filterAndTransformedBooks);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Question 5 answer URL Validation

//-------------------------------------------------

// const regex =  (http | https) ;

// const regex = /^(http|https):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
// const url1 = "http://www.example.com"
// const url2 = "https://www.facebook.com"
// const url3 = "https://www..instagram.com"
// const url14 = "htpps://www.google.com"
// const url15 = "httsp://www.index.html.com"

// console.log(regex.test(url1));
// console.log(regex.test(url2));
// console.log(regex.test(url3));
// console.log(regex.test(url14));
// console.log(regex.test(url15));

// ----------------------------------------------------------

// question 6 LinkedIn profile URL validator

const regex =
  /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// const url1 = "https://www.linkedin.com/in/john-doe-1245a";
// const url2 = "https://www.linkedin.com/in/janedoe1234";
// const url3 = "https://www.linkedin.com/in/john_doe_1";
// const url4 = "https://www.linkedin.com/in/johndoe#";
// const url5 = "https://www.linkedin.com/in/johndoe-";

// console.log(regex.test(url1));
// console.log(regex.test(url2));
// console.log(regex.test(url3));
// console.log(regex.test(url4));
// console.log(regex.test(url5));

//*-----------------------------------------------------*
