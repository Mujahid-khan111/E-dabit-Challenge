function findIndex(arr, index) {
  const result = arr.indexOf(index)
  return result;
  // return arr.indexOf(index);
}

// console.log(console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));                  //2
// console.log(console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));               //1
// console.log(console.log(findIndex(["a", "g", "y", "d"], "d"));                              //3
// console.log(console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); //0


// 12 => Array Indexing
// Given an index and an array, return the value of the array with the given index.

function alueAt(arr, value) {
  return arr[Math.floor(value)];
  // return arr[Math.round(value)];
  // return arr[Math.ceil(value)];
}


// console.log(alueAt([1, 2, 3, 4, 5, 6], 10 / 2));  //6

// console.log(alueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));  //5

// console.log(alueAt([1, 2, 3, 4], 6.535355314 / 2));  //4




// 13 =>  Create a function that takes an array and a
//  string as arguments and returns the index of the string.


function findIndex(arr, str) {
  return arr.indexOf(str)
}


// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));  // 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));  // 1
// console.log(findIndex(["a", "g", "y", "d"], "d"));  // 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));  // 0


// 14 => Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.



function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5]));  // 15
// console.log(sumArray([-1, 0, 1]));  // 0
// console.log(sumArray([0, 4, 8, 12]));  // 24


// 15 =>
//  Create a function that searches for the index of
//  a given item in an array. If the item is present,
//  it should return the index, otherwise, it should return -1.

function search(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

// console.log(search([1, 2, 3, 4], 3)); // 2
// console.log(search([2, 4, 6, 8, 10], 10)); // 4
// console.log(search([1, 3, 5, 7, 9], 11)); // -1

// 16 = >
// Write a function to console.log(check if an array contains a particular number.

function check(arr, Elm) {
  //     const result = arr.includes(Elm);
  //     return result
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Elm) {
      return ("Yes i am in tha array");
    }
  }
  return ("No am not in array");
}

// console.log(check([1, 2, 3, 4, 5], 3));  // Yes i am in tha array
// console.log(check([1, 1, 2, 1, 1], 3));  // No am not in array
// console.log(check([5, 5, 5, 6], 5));     // Yes i am in tha array
// console.log(check([], 5));               // No am not in array


// Normly Example

const array = [1, 2, 3, 4, 5];

// console.log(array.includes(3)); // true
// console.log(array.includes(6)); // false


// 17 => Create a function that takes two numbers num1, num2, and an array arr and returns an array 
//  containing all the numbers in arr greater than num1 and less than num2.
// एक फ़ंक्शन बनाएं जो दो नंबर num1, num2 और एक ऐरे arr लेता है और एक ऐरे लौटाता है 
// जिसमें num1 से अधिक और num2 से कम arr के सभी नंबर होते हैं।

function arrBetween(num1, num2, arr) {
  // return num1 >= num2, num2 < arr
  // const filteredArray = [];

  // for (i = 0; i < arr.length; i++) { 
  //   if(arr[i] > num1 && arr[i] < num2 ){
  //     filteredArray.push(arr[i]);
  //   }
  // }
  // return filteredArray;
  return arr.filter(element => element > num1 && element < num2);
}

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));       // [5, 4, 7]
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));    // [8, 6]
// console.log(arrBetween(7, 32, [1, 2, 3, 78]));            // []


// 18 =>
//   The 50-30-20 strategy is a simple way to budget, 
//   which involves spending 50% of after-tax income on needs,
//   30% after tax income on wants, and 20% after-tax income 
//   on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

function fiftyThirtyTwenty(ati) {
  const needs = ati * 0.5
  const Wants = ati * 0.3
  const Savings = ati * 0.2
  const GST = ati * 0.1
  return {
    "Needs": needs,
    "Wants": Wants,
    "Saving": Savings,
    "GST": GST
  }

}

// console.log(fiftyThirtyTwenty(10000)); // { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000)); // { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450)); // { "Needs": 6725, "Wants": 4035, "Savings": 2690 }


// 19 => Given two arrays, which represent two sandwiches, return whether both sandwiches use the
//       same type of bread. The bread will always be found at the start and end of the array.


function hasSameBread(arr1, arr2) {
  // Check if the first and last elements of both arrays are the same
  return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1];
}

console.log(hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
)); // true

console.log(hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
)); // false

console.log(hasSameBread(
  ["toast", "cheese", "toast"],
  ["brown bread", "cheese", "toast"]
)); // false
