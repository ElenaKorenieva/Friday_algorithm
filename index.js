// Firday: 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// Example:

// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11

//Pseadocode
// 1. Create a function;
// 2. Create variables for storing values;
// 3. Use for loop;
// 4. Compare each element in array with values stored in variables;
// 5. Assign new values to variables;
// 6. Return variable from the function;
// 7. Call the function with necessary argument inside console.log.

function findThirdHighest(arr) {
  let first = 0;
  let second = 0;
  let third = 0;

  for (let num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      third = second;
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  }

  return third;
}

const numbers = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
const thirdHighest = findThirdHighest(numbers);
console.log("The 3rd highest number is:", thirdHighest);
