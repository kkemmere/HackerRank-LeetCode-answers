// Solving HackerRank + LeetCode JS problems

// rdmArray5 = rdmArray5.filter((item) => {
//     return item !== "pig";
//   });

//   console.log(rdmArray5.join(" "));

//   var sqrt = (input) => {
//     console.log(input * input);
//   };

//   sqrt(5);

//   const myArray = [1, 2, 3, 4];
//   myArray.forEach((item, index) => {
//     myArray[index] = ++item;
//   });
//   console.log(myArray);

/*
    With array input of any positive, neg, or zero value create a function that returns num of pos,neg,zero values respectively 
    divided by the array length.
*/

console.log("******Plus Minus EXERCISE*******");

/**
 *
 * @param {array} arr
 * @returns {string}
 */
const parseArray = (arr) => {
  let negValue = -1;
  let posValue = 1;
  let zeroValue = 0;

  let negCount = 0;
  let posCount = 0;
  let zeroCount = 0;

  arr.forEach((item) => {
    if (item === zeroValue) {
      zeroCount++;
    } else if (item >= posValue) {
      posCount++;
    } else if (item <= negValue) {
      negCount++;
    }
  });

  let resultArray = [
    (posCount / arr.length).toFixed(6),
    (negCount / arr.length).toFixed(6),
    (zeroCount / arr.length).toFixed(6),
  ];

  return console.log(resultArray.join("\n"));
};

parseArray([-5, 0, 1, 2, 3, 100, 10000, -50000]);
/*
    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
    Then print the respective minimum and maximum values as a single line of two space-separated long integers. 
*/

console.log("******Min-Max Sum EXERCISE*******");

/**
 * function miniMaxSum()
 * @param {array} arr
 * @returns {string}
 */
const miniMaxSum = (arr) => {
  // Write your code here
  // let smallest = 10000000000000;
  // let max = -10000000000000;
  // let sum = 0;
  // Much better way of calculating max/min
  let smallest = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b);

  //   arr.forEach((item) => {
  //     sum += item;

  //     // if (item <= smallest) {
  //     //   smallest = item;
  //     // }
  //     // if (item >= max) {
  //     //   max = item;
  //     // }
  //   });

  let resultArray = [sum - max, sum - smallest];

  return console.log(resultArray.join(" "));
};

miniMaxSum([3000, 5000, 180000, 3]);

console.log(
  "******Index of two items in array that sum up to target value*******"
);

/**
 *
 * @param {Array} arr
 * @param {int} target
 * @returns {array} result
 * O(n^2) complexity
 */
const sumOfTwo = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        return [i, j];
      }
    }
  }
};

console.log(sumOfTwo([1, 4, 5, 10, 15], 25));

/**
 *
 * @param {Array} arr
 * @param {int} target
 * @returns {array} result
 * O(n) complexity
 */
const sumOfTwoAdv = (arr, target) => {
  let ourMap = new Map();
  let diff = 0;
  let result;

  for (let i = 0; i < arr.length; i++) {
    ourMap.set(arr[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    diff = target - arr[i];
    if (ourMap.has(diff) && i != ourMap.get(diff)) {
      result = [ourMap.get(diff), i];
    }
  }

  return result;
};

console.log(sumOfTwoAdv([1, 4, 5, 10, 15], 25));

console.log("******Convert normal time to military time*******");

let s = "07:05:45PM";

// Function to convert string 12 hour time to 24 hour time
/**
 *
 * @param {String} s
 * @returns String
 */
function timeConversion(s) {
  // Write your code here
  const ampm = s.slice(-2);
  const hours = Number(s.slice(0, 2));
  let time = s.slice(0, -2);
  if (ampm === "AM") {
    if (hours === 12) {
      // 12am edge-case
      return time.replace(s.slice(0, 2), "00");
    }
    return time;
  } else if (ampm === "PM") {
    if (hours !== 12) {
      return time.replace(s.slice(0, 2), String(hours + 12));
    }
    return time; // 12pm edge-case
  }
}

console.log(timeConversion(s));

console.log("******Find Median of odd length array*******");

let ourArr = [15, 10, 11, 12, 13, 14, 9, 1000, 1000];

// Find median of an odd length array
/**
 * @param {Array} arr
 */
function findMedian(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  let arrayLength = sortedArray.length;
  console.log("Median:", sortedArray[Math.round(arrayLength / 2 - 1)]);
}

findMedian(ourArr);

console.log("******Find Mean of any length array*******");

/**
 * @param {Array} arr
 */
function findMean(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  let arrayLength = sortedArray.length;
  let sum = arr.reduce((a, b) => a + b);

  console.log("Mean:", Math.round(sum / arrayLength));
}

findMean(ourArr);

// Write a function that accepts a String as an argument.
// The function should capitalize ONLY every other letter.

console.log("******Capitalize every other character in a string*******");

const everyOther = (string) => {
  let ourLength = string.length;
  var ourString = "";

  for (let i = 0; i < ourLength; i++) {
    if (i % 2 === 0) {
      ourString += string[i].toUpperCase();
    } else {
      ourString += string[i].toLowerCase();
    }
  }

  return console.log(ourString);
};

const everyOtherReduce = (string) => {
  let defaultString = string.split("");

  let newString = defaultString.map((item, index) =>
    index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
  );

  return console.log(newString.join(""));
};

everyOtherReduce("hello");

console.log("******Fix an html string that contains no closing </div>*******");

// Fix an html string that contains no closing </div>
// Example: <div><p>Hello WOrld</p><div>  <----- no closing </div>
// Closes every other div

const fixHTML = (string) => {
  let divCounter = 0;
  let unknownFour = "";
  let fixedHTML = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "<") {
      for (let j = 1; j < 5; j++) {
        unknownFour += string[i + j];
      }
    }

    if (unknownFour === "div>") {
      divCounter++;
      if (divCounter % 2 === 0) {
        fixedHTML += string[i] + "/";
        unknownFour = "";
        continue;
      }
    }

    fixedHTML += string[i];
    unknownFour = "";
  }

  return fixedHTML;
};

console.log(fixHTML("<div><div><p>Hello WOrld</p><div><div>"));

console.log("*******a2b3 string format******");

// Only works if number in string input is 0-9 since it is reading the next value in the string.
// Number value of 0 in string will result in no output of character

const stringFormat = (string) => {
  let ourNumber;
  let ourResult = [];

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      ourNumber = parseInt(string[i]);

      while (ourNumber !== 0) {
        ourNumber = ourNumber - 1;
        ourResult.push(string[i - 1]);
      }
    }
  }

  return string + " " + ourResult.join("");
};

console.log(stringFormat("a9b9c9d9e9f9g9h9"));
