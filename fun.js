

// Part 1: Thinking Functionally:

//Take an array of numbers and return the sum.

const arrayNumbers = [1,2,3,4,5,6];
const sum = arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

//VS2

const arr = [23, 34, 77, 99, 324];
let sum1 = 0;
arr.forEach((el) => sum1 += el);
console.log(sum1);


// Take an array of numbers and return the average.

let  arrayNum = [];
for (let i=0; i<10; i++) {
    arrayNum[i]=Math.floor(Math.random()*10);}
  
function arrayAverageSum(array1) {
    let sum = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      );
    return sum/array1.length;
    }

console.log(arrayNum);
console.log(arrayAverageSum(arrayNum));

//VS2

function calculateAverage(numbers) {
        const sum = numbers.reduce((acc, current) => acc + current, 0);
        return sum / numbers.length;
    }

console.log(calculateAverage(arrayNum));


// Take an array of strings and return the longest string.

const arrayString = [ "green", "blue", "red", "yellow", "aquamarine" ];

function logestString (array) {
    let longest = array [0];
    for (let i=0; i<array.length; i++) {
        if (longest.length < array[i].length) {
            longest = array [i];
        }  
    }
    return longest;
}

console.log(logestString(arrayString));


// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
const num = 3;
const arrayStrings = ['say', 'hello', 'in', 'the', 'morning']; 

const stringsLongerThanNum = (stringArr, num) => {
const filteredStrings = stringArr.filter(str => str.length > num)
    return filteredStrings;
  }
  console.log(stringsLongerThanNum(arrayStrings,num));

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

const number = 10;

function printNumbers(n, current = 1) {
    if (current > n) {
        return; 
    }
    console.log(current); 
    printNumbers(n, current + 1); 
}

console.log(printNumbers(number));


//Part 2: Thinking Methodically