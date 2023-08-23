//Question 1 password validation

// Prompt the user to enter their password
// let password = prompt("Enter your password:");

// Prompt the user to confirm their password
// let confirmedPassword = prompt("Confirm your password:");

// Check if the passwords match
// if (password === confirmedPassword) {
//   console.log("Password Matched. Password validation Successful.");
// } else {
//   console.log("Password didn't match. Password validation unsuccessful");
// }


// In above problem i am not able to  get the output can you help me out 
//it showing that prompt is not defined

//------------------------------------------------------------------------------------------------------------------------------------------

//question 2 calculator

// function calculator(num1, num2, operator) {
//   let result;

//   switch(operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       console.log("Invalid operator");
//       return;
//   }

//   console.log(result);
// }


// calculator(5, 3, "+"); // output: 8
// calculator(5, 3, "-"); // output: 2
// calculator(5, 3, "*"); // output: 15
// calculator(5, 3, "/"); // output: 1.6666666666666667
// calculator(5, 3, "%"); // output: Invalid operator

//-------------------------------------------------------------------------------------------------------------


// Question 3 color Mixer


// function mixColors(color1, color2) {
//   switch (color1) {
//     case 'red':
//       switch (color2) {
//         case 'blue':
//           console.log('purple');
//           break;
//         case 'yellow':
//           console.log('orange');
//           break;
//         default:
//           console.log('Invalid color combination');
//           break;
//       }
//       break;
//     case 'blue':
//       switch (color2) {
//         case 'red':
//           console.log('purple');
//           break;
//         case 'yellow':
//           console.log('green');
//           break;
//         default:
//           console.log('Invalid color combination');
//           break;
//       }
//       break;
//     case 'yellow':
//       switch (color2) {
//         case 'red':
//           console.log('orange');
//           break;
//         case 'blue':
//           console.log('green');
//           break;
//         default:
//           console.log('Invalid color combination');
//           break;
//       }
//       break;
//     default:
//       console.log('Invalid color combination');
//       break;
//   }
// }

// mixColors('red', 'blue'); // Output: purple
// mixColors('blue', 'red'); // Output: purple
// mixColors('red', 'yellow'); // Output: orange
// mixColors('yellow', 'red'); // Output: orange
// mixColors('blue', 'yellow'); // Output: green
// mixColors('yellow', 'blue'); // Output: green
// mixColors('red', 'green'); // Output: Invalid color combination

//--------------------------------------------------------------------------------------------------------------------------



// question 4 highest marks 


// const marks = [80, 90, 75, 85, 95];

// let highestMarks = 0;
// let highestMarksIndex = 0;

// marks.forEach((mark, index) => {
//   highestMarks = mark > highestMarks ? mark : highestMarks;
//   highestMarksIndex = mark > highestMarks ? index : highestMarksIndex;
// });

// console.log(`The highest marks in the class is ${highestMarks} scored by student ${highestMarksIndex + 1}.`);

//--------------------------------------------------------------------------------------------------------------------------------------------------------

// question 5 capitalize



// function capitalizeName(name) {
//   const firstLetter = name.charAt(0);
//   const capitalizedFirstLetter = firstLetter.toUpperCase();
//   const restOfName = name.slice(1);
//   const capitalizedName = capitalizedFirstLetter + restOfName;
//   return capitalizedName;
// }
// const userName = prompt('Please enter your name:');
// const formattedName = /^[A-Z]/.test(userName) ? userName : capitalizeName(userName);

// // console.log(formattedName); // displays the formatted name in the console



// I have compiled this code on other javascript compiler it was working properly but here i am not gettinh what mistake is exactly and propmt is not defined showing like that 

//------------------------------------------------------------------------------------------------------------------------------------------------

// question vowel count 

// let name = prompt("Enter your name: "); // Get name from user input
// let vowel_count = 0; // Initialize vowel count to zero

// // Loop through each character in the name
// for (let i = 0; i < Name.length; i++) {
//   let char = Name.charAt(i); // Get the character at the current index
//   char = char.toLowerCase(); // Convert character to lowercase to match with vowels
  
//   // Check if the character is a vowel
//   if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//     vowel_count++; // Increment the vowel count
//   }
// }

// // Display the vowel count to the user
// alert("The number of vowels in your name is: " + vowel_count);


// in above question also same problem when i am using promt it is saying that prompt is not defined what to de please tell me the reason 

//----------------------------------------------------------------------------------------------------------------------------------------------------

// question 7 remove duplicates

// Sample input cart with duplicate items
// let input_cart = [
//   {id: 1, name: 'Item 1', price: 10},
//   {id: 2, name: 'Item 2', price: 20},
//   {id: 1, name: 'Item 1', price: 10},
//   {id: 3, name: 'Item 3', price: 30},
//   {id: 2, name: 'Item 2', price: 20},
// ];

// Initialize an empty array to hold the unique items
// let unique_cart = [];

// Loop through each item in the input cart
// for (let i = 0; i < input_cart.length; i++) {
//   let item = input_cart[i];
//   let exists = false;

//   // Check if the item is already in the unique cart
//   for (let j = 0; j < unique_cart.length; j++) {
//     if (unique_cart[j].id === item.id) {
//       exists = true;
//       break;
//     }
//   }

  // If the item is not already in the unique cart, add it
//   if (!exists) {
//     unique_cart.push(item);
//   }
// }

// Display the unique cart to the console
// console.log(unique_cart);

// above code is working properly 

// ------------------------------------------------------------------------------------------------------------

// QUESTION 8 IS RIGHT ANGLED INVERTED TRIANGLE


// let i = parseInt(prompt("Enter the number of rows: "));

// for(let row = 0; row < i; row++) {
//     for(let col = 0; col < i - row; col++) {
//         document.write("*");
//     }
//     document.write("<br>");

//   }

  // ABOVE CODE SOLUTION SAME PROBLEM I AM FACING WITH PARSE > PROMPT COMMAND PLEASE HELP ME

  // ------------------------------------------------------------------------------------------------------------------------------------------------------


  // question 9  divisible by 3 but not divisible by 2

  // let numbers = [3, 6, 9, 12, 15, 18, 21];

  // for(let i = 0; i < numbers.length; i++) {
  //     if(numbers[i] % 2 === 0) {
  //         continue;
  //     }
  //     if(numbers[i] % 3 === 0) {
  //         console.log(numbers[i]);
  //     }
  // }
  
// ABOVE COE IS WORKING PROPERLY WITH THE GIVEN QUESTION

// -------------------------------------------------------------------------------------------------------------------------------------------

// QUETION 10 IS Correct a bug

// function doubleCartQuantity(cart) {
//   for (let i = 0; i < cart.length; i++) {
//     cart[i] *= 2;
//   }
//   return cart;
// }


// let cart = [1, 2, 3, 4, 5];
// let updatedCart = doubleCartQuantity(cart);
// console.log(updatedCart); // prints [2, 4, 6, 8, 10]



// ABOVE CODE I WORKING PROPERLY


// -------------------------------------------------------------------------------------------------------------------------------------------------


//   QUESTION 11 IS UNIT CONVERTER


// function celsiusToFahrenheit(celsius) {
//   let fahrenheit = (celsius * 9/5) + 32;
//   return fahrenheit;
// }
// let celsius = 25;
// let fahrenheit = celsiusToFahrenheit(celsius);
// console.log(fahrenheit); // prints 77

// -------------------------------------------------------------------------------------------------


// Question 12 calcuate rental cost

//function calculateRentalCost(numDays, carType) {
//  let rentalCost;
//
//  switch(carType) {
//    case "Economy":
//      rentalCost = 4000;
//      break;
//    case "Midsize":
//      rentalCost = 10000;
//      break;
//    case "Luxury":
//      rentalCost = 20000;
//      break;
//    default:
//      console.log("Invalid car type");
//      return;
//  }
//
//  return rentalCost * numDays;
//}


//console.log(calculateRentalCost(3, "Economy")); // output: 12000
//console.log(calculateRentalCost(5, "Midsize")); // output: 50000
//console.log(calculateRentalCost(1, "Luxury")); // output: 20000
//console.log(calculateRentalCost(2, "Compact")); // output: Invalid car type


//------------------------------------------------------------------------------------------------------------------

//Question 13 bill spliter

//function calculateBill(dishes, numPeople) {
//  const totalCost = dishes.reduce((acc, dishCost) => acc + dishCost, 0);
//  const perPersonCost = totalCost / numPeople;
//
//  return {
//    total: totalCost,
//    perPerson: perPersonCost
//  };
//}
//
//const dishes = [10, 15, 20];
//const numPeople = 5;
//
//const bill = calculateBill(dishes, numPeople);
//
//console.log(bill.total); // 45
//console.log(bill.perPerson); // 9


//------------------------------------------------------------------

//Question 14 calcultae the final order price

// const calculateTotalCost = (cart) => {
//   const totalCost = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
//   return totalCost;
// }

// const cart = [
//   { unitPrice: 10, quantity: 2 },
//   { unitPrice: 15, quantity: 1 },
//   { unitPrice: 20, quantity: 3 }
// ];

// const totalCost = calculateTotalCost(cart);

// console.log(totalCost); // 95

//-----------------------------------------------------------------------------------

// Question 15 Calculate the percentage of discount
// const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  // const discountAmount = originalPrice - discountedPrice;
  // const discountPercentage = (discountAmount / originalPrice) * 100;
  // return Math.round(discountPercentage * 100) / 100;
// }
// 
// 
// const originalPrice = 50;
// const discountedPrice = 35;
// 
// const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
// 
// console.log(discountPercentage); // 30
// 


//------------------------------------------------------------------------------------------------------

// Question 16 Generate a random number

// const randomNum = (() => {
  // return Math.floor(Math.random() * 100) + 1;
// })();
// 
// console.log(randomNum);
// 

///----------------------------------------------------------------------------------

// Question 17 Buld a banking application

const customer = {
  name: "Ronak",
  balance: 10000,
  deposit: function(amount) {
    this.balance += amount;
    console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
  },
  withdraw: function(amount) {
    if (amount > this.balance) {
      console.log(`Withdrawal of ${amount} unsuccessful. Insufficient balance.`);
    } else {
      this.balance -= amount;
      console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
    }
  }
};

// Example usage:
customer.deposit(5000); // Deposit of 500 successful. New balance is 1500.
customer.withdraw(2000); // Withdrawal of 200 successful. New balance is 1300.
customer.withdraw(1500); // Withdrawal of 1500 unsuccessful. Insufficient balance.

// ----------------------------------------------------------------------------------------

