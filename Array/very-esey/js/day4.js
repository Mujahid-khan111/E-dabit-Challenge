// length without length() function 

// 27 
function length(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

// console.log(length("Hello World")); // Output: 11
// console.log(length("Edabit")); // Output: 6
// console.log(length("mujahid khan")); // Output: 6
// console.log(length("wash your hands!")); // Output: 16


//   28=> Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
// result.push(number / Math.pow(2, i));

function halfQuarterEighth(num) {
    const p1  = num / 2;
    const p2  = num / 4;
    const p3  = num / 8;
    return [p1, p2, p3];

    // let result = [];
    // for (i = 1; i <= 3; i++) {
    //     result.push(n / Math.pow(2, i));
    // }
    // return result;

}

  // [12.5, 6.25, 3.125]

console.log(halfQuarterEighth(6));   // [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22));  // [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25));  // [12.5, 6.25, 3.125]


// 29 => 