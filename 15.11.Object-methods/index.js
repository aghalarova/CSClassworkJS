// TASK-1
let person = {
  firstName: "Sabina",
  lastName: "Aghalarova",
  age: 21,
  university: "Ganja State University",
};

// 1
// console.log(Object.keys(person));

// 2
// console.log(Object.values(person));

// 3
// console.log(Object.entries(person));

// 4
// delete person.age;
// console.log(person);

// 5
// let array = Object.values(person);
// let max = "";
// for (let i = 0; i < array.length; i++) {
//   if (array[i].length > max.length && typeof array[i] == "string") {
//     max = array[i];
//   }
// }
// console.log(max);

// TASK-2
// let library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     readingStatus: true,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     readingStatus: true,
//   },
//   {
//     title: "Suzanne Collins",
//     author: "Mockingjay: The Final Book",
//     readingStatus: false,
//   },
// ];

// library.forEach((library) => {
//   if (library.readingStatus === true) {
//     console.log(`Already read ${library.title} by ${library.author}.`);
//   } else {
//     console.log(`You still need to read ${library.title} by ${library.author}`);
//   }
// });

// TASK-4
let employee = {
  name: "Sabina",
  jobTitle: "Software Developer",
  salary:  75000,
  promote: function (p1, p2) {
    this.jobTitle = p1;
    this.salary = p2;
    console.log(` ${this.name} is now ${this.jobTitle} with a salary of ${this.salary}
   `);
  },
};
employee.promote("Senior Software Developer",90000,)