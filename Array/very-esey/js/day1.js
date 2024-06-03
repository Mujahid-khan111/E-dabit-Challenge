// 1 => Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.


// function getFirstValue(arr) {
//     // const Firstvalue = arr[0];
//     const Firstvalue = arr.shift();
//     return Firstvalue;
// }

// function getFirstValue(array) {
//     let first = array[0];
//     return first;
// }

// function getFirstValue(arr) {
//     let [first]=arr
//     return first
// }

// console.log(getFirstValue([1, 2, 3])); // 1
// console.log(getFirstValue([80, 5, 100])); // 80
// console.log(getFirstValue([-500, 0, 50])); // -500


// 2 => Given two arguments, return an array which contains these two arguments.
// Examples

function makePair(arr1, arr2) {
    // return [...arguments];
    return [arr1, arr2]
}

// console.log(makePair(1, 2));
// console.log(makePair(51, 21));
// console.log(makePair(512124, 215));
// console.log(makePair("mujahid", "khan"));

// function returnArray(arg1, arg2) {
//     return [arg1, arg2];
// }

// Examples
// console.log(returnArray(1, 2));               
// console.log(returnArray("hello", "world"));   
// console.log(returnArray(true, false));        


/* 3 => According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
Your challenge is to write your own version using vanilla JavaScript.*/

// Example

// function drop(arr, arg1) {
//     return arr.slice(arg1);
// return arr.slice(arg1)
// return arr.splice(arg1);


// }

// console.log(drop([1, 2, 3], 1));   //);    //[2, 3]
// console.log(drop([1, 2, 3], 2));   //);    //[3]
// console.log(drop([1, 2, 3], 5));   //);    //[]
// console.log(drop([1, 2, 3], 0));   //);    //[1, 2, 3]

// 4 => Given an object containing counts of both upvotes and downvotes, 
// return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// function getVoteCount(vote) {
//     return vote.upvotes - vote.downvotes;
// }

// Examples
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }) );        // 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }) );        // -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 } ) );    // 0

// 5 => Write a function to  reverse an array.
// Examples

//   // []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.



function reverse(arr) {
    // return arr.reverse();
    let res = [];
    for(let i = arr.length-1; i>= 0; i--){
        res.push(arr[i])
    }}
//    return res
// }
// console.log(reverse([1, 2, 3, 4]));         //       // [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4]));      //       // [4, 3, 2, 9, 9]
// console.log(reverse([]));

// 6 => Help fix all the bugs in the function console.log(incrementItems! It is intended to add 1 to every element in the array!
// Examples

function incrementItems(arr) {
    // const arrIncrement = []; // variable is array is Incriment = Epti array
    // for (let i = 0; i < arr.length; i++) {
    //     arrIncrement.push(arr[i] + 1);
    // }
    // return arrIncrement;
    return arr.map((arr1) => arr1 + 1);
}
// console.log(incrementItems([0, 1, 2, 3]));      // [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8]));       // [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4]));   // [0, -1, -2, -3]


//7 You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6, "mujahid", "khan"]
// let a = arr[6]
// let b = arr[7]

// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2

// console.log(a) // mujaid 
// console.log(b) // khan

//  7 => Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arg){
//     return getLastItem.pop() ;
// }

function getLastItem(arr) {
    const lastEliment = arr.pop();
    return lastEliment;

    // const lastElm = arr.slice(1);
    // return lastElm;
}
// console.log(getLastItem([1, 2, 3]));               /   //3
// console.log(getLastItem(["cat", "dog", "duck"]));  /   //"duck"
// console.log(getLastItem([true, false, true ,false]));     /   //true
// console.log(getLastItem(["khan", false, "I am last ELiment"]));     /   //true


//  8 => Create a function that takes an array of
// numbers or letters and returns a string.

function arrayToString(arr) {
    // const convertElm = arr.join("");
    // return convertElm;
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        // console.log(typeof result);
    }
    return result;
}

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));               //"123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));   //"abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));     //"123asdAAAA"'

// 9 => Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

function concat(arr1, arr2) {
    // return arr1.concat(arr2)
    // const arrayconcat =  `[${arr1},${arr2}]`
    //  return arrayconcat;
     return `[${arr1},${arr2}]`
}
// console.log(concat([1, 3, 5], [2, 6, 8]));          //  [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));      //  [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));     //  [4, 5, 1, 3, 3, 3, 3, 3]

//  10 => Create a function that takes an array and a string
//  as arguments and returns the index of the string.

function findIndex(arr,index){
      const  result = arr.indexOf(index)
      return result;
    // return arr.indexOf(index);
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));                  //2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));               //1
console.log(findIndex(["a", "g", "y", "d"], "d"));                              //3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); //0


