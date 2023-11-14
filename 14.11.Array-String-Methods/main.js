// // TASK-1
// let text = "Java is awesome. Java is fun.";
// console.log(text.replaceAll("Java" , "Javascript"));

// TASK-2
// function mixUp(a, b) {
//   let result = b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
//   return result;
// }
// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// TASK-3
// function verbing(verb) {
//   if (verb.length < 3) {
//   } else if (verb.slice(-3) === "ing") {
//     verb = verb + "ly";
//   } else {
//     verb = verb + "ing";
//   }
//   return verb;
// }
// console.log(verbing("go")); // go
// console.log(verbing("swim")); //swiming
// console.log(verbing("swiming")); //swimingly

// TASK-4
function isPalindrome(string) {
  let result = string.split("").reverse().join("");
  return string === result ? "palindrome-dir" : "palindrome deyil";
}

// console.log(isPalindrome("ana"));
// console.log(isPalindrome("hello"));

// TASK-5
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let length = 4;

function splitIntoChunk(arr, len) {
    let newArr = [];
  for (let i = 0; i < arr.length; i += len) {
    newArr.push(arr.slice(i, i + len));
  }
  return newArr;
}

console.log(splitIntoChunk(array, length)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
