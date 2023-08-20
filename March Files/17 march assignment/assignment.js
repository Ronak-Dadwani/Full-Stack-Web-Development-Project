//Question 1 Solution Count the occurrences.

// function countWords(text) {
//     const words = text.split(" "); // split the string into an array of words
//     const wordCounts = new Map(); // create an empty Map to hold the word counts
//     for (const word of words) { // loop over the words in the array
//       if (word.length === 0) continue; // skip empty strings
//       const count = wordCounts.get(word) || 0; // get the current count for this word, or 0 if it hasn't been counted yet
//       wordCounts.set(word, count + 1); // increment the count for this word and update the Map
//     }
//     return wordCounts; // return the Map of word counts
//   }
  
  // Example usage:
//   const text = "ronak ronak , dadwani";
//   const wordCounts = countWords(text);
//   console.log(wordCounts);
  //--------------------------------------------------------------------------------------------

// Question 2 Only unique items are allowed.

// function removeDuplicates(numbers) {
//     const uniqueNumbers = new Set(numbers); // create a new Set containing the unique elements of the input array
//     return Array.from(uniqueNumbers); // convert the Set back to an array and return it
//   }
  
  // Example usage:
//   const numbers = [1, 2, 3, 2, 4, 1, 5, 3, 5, 6 ];
//   const uniqueNumbers = removeDuplicates(numbers);
//   console.log(uniqueNumbers);

  // Question 3 Swap the values.

//   function swapValues(x, y) {
//     [x, y] = [y, x];
//     return [x, y];
//   }
  
//   let x = 5;
//   let y = 10;
  
//   [x, y] = swapValues(x, y);
  
  // console.log([x , y]); // Output: [10 , 5]

//------------------------------------------------------------------------------------------------

//Question 4 Acess Random Element

// function extractElements(array) {
//     const [first, second, ...rest] = array;
//     const last = rest.pop();
//     return [first, second, last];
//   }
//   const numbers = [100, 200, 3, 4, 500];
  
//   const [first, second, last] = extractElements(numbers);
  
//   console.log([first , second , last]); // Output: 1 , 2 , 3

//-------------------------------------------------------------------------------------

//Question 5 Min and max values.

// function findMinMax(array) {
//     const max = Math.max(...array);
//     const min = Math.min(...array);
//     return { max, min };
//   }
  
//   const numbers = [5, 2, 7, 1, 9];
  
//   const result = findMinMax(numbers);
  
//   console.log(result); // Output: { max: 9, min: 1 }

  //----------------------------------------------------------------------------------------------

  //Question 6 Nested Operator


  function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }
  
  
  const person = {
    name: "Janak",
    address: {
      street: "62 ,Near Balika hair salon , Opp. Muslim masjid",
      city: "Morbi",
      state: "Gujarat",
      zip: "363330"
    }
  };
  
  const result = extractNameAndStreet(person);
  
//   console.log(result); // Output: { name: "John", street: "123 Main St" }
  


  
  
  
  