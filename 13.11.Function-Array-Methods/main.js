// TASK-1
// let findFirstNotRepeatedChar = (a) => {
//   let str = "";
//   for (let i = 0; i < a.length; i++) {
//     if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
//       str = a[i];
//       break;
//     }
//   }
//   return str;
// };
// console.log(findFirstNotRepeatedChar("abacddbecz"));

// TASK-2
// function charCount(word, letter) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (letter == word[i].toLocaleLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(charCount("w3resCCCCCCCCCCcource.com", "c"));

// TASK-3
function makeId(length) {
  let text = "";
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return text;
}

console.log(makeId(8));

