// 20 =>
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.


function parseArray(arr) {
    return arr.map(x => typeof x === 'number' ? String(x) : x);
}

// console.log(parseArray([1, 2, "a", "b"]));    // ["1", "2", "a", "b"]
// console.log(parseArray(["abc", 123, "def", 456]));    // ["abc", "123", "def", "456"]
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));    // ["1", "2", "3", "17", "24", "3", "a", "123b"]
// console.log(parseArray([]));    // []


// 21 => Create a function that takes an array 
// and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
    // return arr.map(x => typeof x === 'object' && Array.isArray(x) ? 'array' : typeof x);
    var result = [];
    for (i = 0; i < arr ; i++) {
        if (typeof arr[i] === 'object' && Array.isArray(arr[i])) {
            result.push('array');
        } else {
            result.push(typeof arr[i]);
        }
    }
    return result;
}

// console.log(arrayValuesTypes([1, 2, "null", {}]));                                        //);  // ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));                   //);  // ["string", "boolean", "boolean", "number", "number", "array", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])); //);  // ["number", "string", "string", "array", "object", "boolean", "number"]


// 22 => There is an easy way to assign to array values to the nth index by using rest parameter syntax.
// But how could I make tail = [2, 3, 4] instead of tail = 2?


// var [head, ...tail] = [1, 2, 3, 4]
const [head, tail, tails] = [1, 2, 3, 4];

// console.log(head)  // outputs 1
// console.log(tail)  // outputs 2
// console.log(tails) // outputs 3


// 23=> Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

function toNumberArray(arr) {
    return arr.map(num => parseFloat(num));
}

//  ["1", "3", "3.6"] // [1, 3, 3.6]

// console.log(toNumberArray(["9.4", "4.2"]));  // [9.4, 4.2]
// console.log(toNumberArray(["91", "44"]));  // [91, 44]
// console.log(toNumberArray(["9.5", "8.8"]));  // [9.5, 8.8]



// 24=> Create a function that takes an array of two
//      numbers and checks if the square root of the first 
//      number is equal to the cube root of the second number.

function checkSquareAndCube(arr) {
    const num1 = arr[0]
    const num2 = arr[1]
    return Math.sqrt(num1) === Math.cbrt(num2);

}

// console.log(checkSquareAndCube([4, 8]))          //  true
// console.log(checkSquareAndCube([16, 48])),       //  false
// console.log(checkSquareAndCube([9, 27])),        //  true
// console.log(checkSquareAndCube([4, 8])),         //  true
// console.log(checkSquareAndCube([5, 12])),        //  false
// console.log(checkSquareAndCube([9, 27])),        //  true
// console.log(checkSquareAndCube([25, 120])),      //  false
// console.log(checkSquareAndCube([25, 125])),      // true
// console.log(checkSquareAndCube([36, 215])),      // false
// console.log(checkSquareAndCube([36, 217])),      // false
// console.log(checkSquareAndCube([144, 1728])),    // true
// console.log(checkSquareAndCube([1, 1])),         // true
// console.log((checkSquareAndCube([676, 17576]))); // true


// 25 =>  You call your spouse in anger and a "little" argumen
// t takes place. Count the total amount of insults used.
//  Given an object of insults, return the total amount of insults used.


function totalAmountAdjectives(insults) {
    let total = 0;
    for (let insult in insults) {
        total += insult[insult];
    }
    return total;
}

// console.log(totalAmountAdjectives({ a: "moron" }));  // 1
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));  // 3
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })); // 4

// question 25 panding




// 26=> You can assign variables from arrays with destructuring like this:

const arr = ["eyes", "nose", "lips", "ears"]
let [, , , easy] = arr;
console.log(easy);   // lips

// But you can also skip over items in the array being destructured.




// 27 => Create a function which returns the console.log(length of a string, WITHOUT using String.console.log(length property.

function length(str) {
    let Count = 0;
    for (let char of str) {
        count++;
    }

    return count;
}


console.log(length("Hello World"));  // 11
console.log(length("Edabit"));  // 6
console.log(length("wash your hands!"));  // 16

