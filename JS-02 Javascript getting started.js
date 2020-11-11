// Javascript getting strted
/* 
js.02
date: 29.10.20
author: Giorgi
*/

// let arr = [10, 23, 45, 35, 5, 22, 40, 66];

// // // arr.push(3);
// // // console.log(arr.length);

// // let min = arr[0];

// let min = arr[0];
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log(min);

// let barca = ["ter Stegen", "dest", "pique", "lenglet", "alba", "de jong", "coutinho", "busquets", "messi", "ansu Fati", "griezmann"] 

// for (i = 0; i < barca.length; i++) {
//     if(barca[i] == "messi") {
//         indexOfmessi = i;
//     }
// } 
// console.log(indexOfmessi);

// let barca = ["ter Stegen", "dest", "pique", "lenglet", "alba", "de jong", "coutinho", "busquets", "messi", "ansu Fati", "griezmann"] 
// for (i = 0; i < barca.length; i++) {
//     if(barca[i] == "messi") {
//         messi = "messi";
//     }
// } 
// console.log(messi);


// let name = "Sophia";

// let message = "this is your homework";
// let messageee = "\"this is your homework\""
// let messagee = "'this is your homework'";

// let message1 = 'this is your homework';
// let message11 = '"this is your homework"';

// let message2 = `this is your homework`;
// let message22 = `ths is your

// homework`;
// let message222 = `this is your \n homework`;
// let message2222 = `this is your \t homework`;
// let message22222 = `this is your homework ${name}`;

// console.log(name.length);
// console.log(message.length);
// console.log(message);
// console.log(messageee);
// console.log(messagee);
// console.log(message1);
// console.log(message11);
// console.log(message2);
// console.log(message22);
// console.log(message222);
// console.log(message2222);
// console.log(message22222);


// let price = 200.5;
// let isNew = true;
// let surname;
// let nickname = null;

// console.log(typeof name);
// console.log(typeof price);
// console.log(typeof isNew);
// console.log(typeof surname);
// console.log(typeof nickname);

// let target = name;

// switch (typeof target) {
//     case "number" :
//         console.log("this is a number");
//     break;
//     case "string" :
//         console.log("this is a string");
//     break;
//     case "boolean" :
//         console.log("this is a boolean");
//     break;
//     case "undefined" :
//         console.log("this is undefined");
//         break;
//         default :
//         console.log("probably this is an object");
// }


// let target = 5;
// let target2 = "5";

// console.log(target===target2);

// let target = 5;
// let target2 = "5";

// console.log(target==target2);

// let target = undefined;
// let target2 = null;

// console.log(target===target2);



// let target = undefined;
// let target2 = null;

// console.log(target==target2);


// let target = undefined;
// let target2 = null;

// if(target) {
//     console.log("this is truthy value");
// } else {
//     console.log("this is falsy value");
// }

let student1 = {
    name: "Sophia",
    grade: 80
};

let student2 = {
    name: "Nino",
    grade: 90
};

let student3 = {
    name: "Giorgia",
    grade: 95
};

let student4 = {
    name: "Tamta",
    grade: 49
};

// console.log(student1.name);
// console.log(student1.surname);
// console.log(student1.grade);

let students = [];

students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);

// console.log(students[0].name);
// console.log(students.length);
// console.log(students);

// for (i = 0; i < students.length; i++) {
//     console.log(students[i].name);
// console.log(students[i].grade);
// }

//  for (let i = 0; i < students.length; i++) {
//     console.log (`name of this student is ${students[i].name}`);
//     console.log(`the name of this student is ` + students[i].name);
// console.log (`name of number ` + (i+1) + ` student is ` + students[i].name);
// console.log(`name of number ${i+1} student is ${students[i].name}`);
// }

// let successfulStudents = [];
// let unsuccessfulStudents = [];
let listOfSuccesfulStudents = ``;
let listOfUnsuccesfulStudents = ``;

for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 50) {
        listOfSuccesfulStudents = listOfSuccesfulStudents + " " + students[i].name;
        // successfulStudents.push(students[i]);
    } else {
        // unsuccessfulStudents.push(students[i]);
        listOfUnsuccesfulStudents = listOfUnsuccesfulStudents + " " + students[i].name;
    }
}
    // console.log(successfulStudents);
    // console.log(unsuccessfulStudents);
console.log(`those are successful students: ` + listOfSuccesfulStudents);
console.log(`those are unsuccessful students: ` + listOfUnsuccesfulStudents);
console.log(listOfSuccesfulStudents + listOfUnsuccesfulStudents);
