//Question 1: Reverse a string without using the built-in reverse() method

// function reverseString(str) {
//     let reversedStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
//     return reversedStr;
//   }
// let rStr = reverseString("Hello World!");
// console.log(rStr);  



//Question 2: Count the number of vowels in a given string.

// const inputString = "abcdE";
// function countVowels(inputString) {
//   const vowels = "aeiouAEIOU";
//   let vowelCount = 0;

//   for (let char of inputString) {
//       if (vowels.includes(char)) {
//           vowelCount++;
//       }
//   }

//   return vowelCount;
// }

// const result = countVowels(inputString);
// console.log(`The number of vowels in "${inputString}" is: ${result}`);


// Question:3 Convert the first letter of each word in a sentence to uppercase.

// const inputSentence = "hi my name is abdul rafay";

// function capitalizeEachWord(sentence) {
//   const words = sentence.split(" ");

//   for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }

//   return words.join(" ");
// }

// const result = capitalizeEachWord(inputSentence);
// console.log(result);



// Question:4 Check if a string is a palindrome.

// const inputString = "civic";

// function isPalindrome(str) {
//   const cleanedStr = str.replace();
//   return cleanedStr === cleanedStr.split('').reverse().join('');
// }


// const result = isPalindrome(inputString);
// console.log("Is Palindrome?", result);


// Question:5 Find the sum of all positive numbers in an array.

// const numbers = [1,2,3,-4,-2];
// function sumOfPositiveNumbers(arr) {
//   return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
// }



// const result = sumOfPositiveNumbers(numbers);
// console.log(result);



// Question:6 Find the index of the first occurrence of a specific element in an array.


// function indexOfElement(arr, target) {
//   return arr.indexOf(target);
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 8];
// const targetElement = 8;
// const index = indexOfElement(numbers, targetElement);

// if (index !== -1) {
//   console.log(`The index of the first occurrence of ${targetElement} is: ${index}`);
// } else {
//   console.log(`${targetElement} is not found in the array.`);
// }





// Question:7 Remove all duplicates from an array without built-in 

// const numbers = [1, 2, 3, 4, 3, 2, 5];
// function removeDuplicates(arr) {
//   const uniqueArray = [];

//   for (let i = 0; i < arr.length; i++) {
//       if (uniqueArray.indexOf(arr[i]) === -1) {
//           uniqueArray.push(arr[i]);
//       }
//   }

//   return uniqueArray;
// }

// const result = removeDuplicates(numbers);
// console.log("Array with duplicates:", numbers);
// console.log("Array without duplicates:", result);



// Question:8 Sort the array in ascending and descending without built-in methods
// const numbers = [4, 2, 7, 1, 9, 3];
// function bubbleSortAscending(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//           if (arr[j] > arr[j + 1]) {
//               const temp = arr[j];
//               arr[j] = arr[j + 1];
//               arr[j + 1] = temp;
//           }
//       }
//   }

//   return arr;
// }



// function bubbleSortDescending(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//           if (arr[j] < arr[j + 1]) {
//               // Swap elements if they are in the wrong order
//               const temp = arr[j];
//               arr[j] = arr[j + 1];
//               arr[j + 1] = temp;
//           }
//       }
//   }

//   return arr;
// }
// const ascendingResult = bubbleSortAscending([...numbers]);
// const descendingResult = bubbleSortDescending([...numbers]);

// console.log("Original Array:", numbers);
// console.log("Sorted Array (Ascending):", ascendingResult);
// console.log("Sorted Array (Descending):", descendingResult);




// Question:9 Print all even numbers between 1 and 20 using a while loop

// let number = 2;

// while (number <= 20) {
//     console.log(number);
//     number += 2; 
// }



// Question:10 Calculate the factorial of a number using a do-while loop.

// function calculateFactorial(number) {
//   if (number < 0) {
//       return "Factorial is not defined for negative numbers";
//   }

//   let factorial = 1;
//   let i = 1;

//   do {
//       factorial *= i;
//       i++;
//   } while (i <= number);

//   return factorial;
// }

// const inputNumber = 4;
// const result = calculateFactorial(inputNumber);
// console.log(`The factorial of ${inputNumber} is: ${result}`);



// Question:11 Iterate through the properties of an object using a for-in loop.


// const myObject = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// for (let key in myObject) {
//   if (myObject.hasOwnProperty(key)) {
//       console.log(`${key}: ${myObject[key]}`);
//   }
// }



//Question:12 Loop through an array using a for-of loop and double each element.


// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = [];

// for (let element of originalArray) {
//     doubledArray.push(element * 2);
// }

// console.log("Doubled Array:", doubledArray);



// Question:13 Check if a number is even or odd and return a corresponding message.

// function checkEvenOrOdd(number) {
//   if (number % 2 === 0) {
//       return `${number} is even.`;
//   } else {
//       return `${number} is odd.`;
//   }
// }

// const myNumber = 7;
// const result = checkEvenOrOdd(myNumber);
// console.log(result);



// Question:14 Find the maximum of three numbers using nested ternary operators.


// function findMaxOfThreeNumbers(a, b, c) {
//   const max = (a > b)
//       ? (a > c ? a : c)
//       : (b > c ? b : c);

//   return max;
// }

// const num1 = 10;
// const num2 = 5;
// const num3 = 8;

// const result = findMaxOfThreeNumbers(num1, num2, num3);
// console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${result}`);


// Question:15 Determine if a year is a leap year or not.


// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       return true; // Leap year
//   } else {
//       return false; // Not a leap year
//   }
// }

// const myYear = 2020;
// const isLeap = isLeapYear(myYear);

// if (isLeap) {
//   console.log(`${myYear} is a leap year.`);
// } else {
//   console.log(`${myYear} is not a leap year.`);
// }





