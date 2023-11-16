// TASK-1
let arr = [2, 4, -3, 43, 41, -3, 99];

function findPositives(arr) {
  arrFiltered = arr.filter((item) => {
    return item > 0;
  });
  //   console.log(arrFiltered);
}
findPositives(arr);

// TASK-2

function isRectangle(a, b, c) {
  if (
    a ** 2 + b ** 2 === c ** 2 ||
    b ** 2 + c ** 2 === a ** 2 ||
    a ** 2 + c ** 2 === b ** 2
  ) {
    return "Yes";
  } else {
    return "No";
  }
}

// console.log(isRectangle(3, 4, 5)); //yes
// console.log(isRectangle(3, 6, 5)); //no
// console.log(isRectangle(4, 5, 3)); //yes

// TASK-3

// let webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];
// let result = webTechs.findIndex((item) => item === item.toLocaleUpperCase());
// console.log(result);

// TASK-4

// const webTechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", "MongDB"];
// let result = webTechs2.filter((item) => item === item.toLocaleUpperCase());
// console.log(result);

// TASK-5

// function reverseCase(str) {
//   if (str === str.toLocaleUpperCase()) {
//     return str.toLocaleLowerCase();
//   } else {
//     return str.toLocaleUpperCase();
//   }
// }

// console.log(reverseCase("MANY THANKS")); //"many thanks"
// console.log(reverseCase("many thanks")); //"MANY THANKS"

// TASK-6

let users = [
  {
    name: "Anar",
    surname: "Hesenli",
    age: "22",
    uni: "ADA",
    gender: "male",
    salary: "3001",
  },
  {
    name: "Nicat",
    surname: "Sadiqov",
    age: "25",
    uni: "GDU",
    gender: "male",
    salary: "200",
  },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
    salary: "300",
  },
  {
    name: "Hikmet",
    surname: "Hesenov",
    age: "22",
    uni: "UNEC",
    gender: "male",
    salary: "320",
  },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "GDU",
    gender: "male",
    salary: "420",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
    salary: "3210",
  },
];

// 2.1
// let result = users.filter((item) => item.uni.toLocaleLowerCase() === "unec" && item.surname[0].toLocaleLowerCase()==="r");
// console.log(result);

// 2.2
let result = users.filter(
  (item) => item.age == 22 && item.name[0].toLocaleLowerCase() === "a"
);
// console.log(result);

// 2.3
users.sort((a, b) => a.age - b.age);
// console.log(users);

// 2.4

let updatedUser = users.map((element) => {
  if (element.gender === "male") {
    return { ...element, name: `Mr. ${element.name}` };
  } else {
    return { ...element, name: `Mrs. ${element.name}` };
  }
});
// console.log(updatedUser);

// 2.6
let employees = [
  {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
];
// 1
let max = employees[0];
employees.forEach((element) => {
  if (element.skills.length > max.skills.length) {
    max = element;
  }
});
// console.log(max);
// 2
// let obj = employees.filter((item) => item.isLoggedIn === true);
// console.log(obj);

// 3
// let ascending = employees.sort((a, b) => a.age - b.age);
// console.log(ascending);
// let descending = employees.sort((a, b) => b.age - a.age);
// console.log(descending);
