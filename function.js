// v57
// function sayhello(userName) {
//     console.log(`hi ${userName}`);

// }
// sayhello("ahmad");
// sayhello("saad");



//v58
// function sayhello(userName, age) {
//     if (age < 20) {
//         console.log(`hi ${userName}Your age is ${age}`);
//     } else {
//         console.log(`hello ${userName} your Age is ${age}`);
//     }

// }
// sayhello("ahmad", 40);
// sayhello("saad", 50);
// sayhello("saadoo", 20);


// function generateYears(start, end, exclude) {
//     for (let i = start; i <= end; i++) {
//         if (i === exclude) {
//             continue;
//         }
//         console.log(i);

//     }

// }
// generateYears(1993, 2020, 1996);

//v59
//ex1

// function sayHello(userName) {
//     return `Hello ${userName}`;  return btraje3 el natije w mamnu3 ektob shi ba3da
// }
// let result = sayHello("Osama");
// console.log(result);




//ex2
// function calc(num1 , num2) {
//     return num1 + num2; return btraje3 el natije w mamnu3 ektob shi ba3da
//            let x = 1;
// }
// let result = calc(10, 20);
// console.log(result );
// console.log(result + 100); fine zid 3laya


//ex3
// function generate(start, end) {
//     for (let i = start; i <= end; i++) {
//         tahet console.log(i);
//         if (i === 15) {
//             return `interrupting`;
//         }
//       aw fo2 fik tna2e mahal w hik ya btetba3 15 aw la2
//        console.log(i);
//     }

// }
// generate(10, 20);





//default function parameter
///////////////////////////////veryyy veryyy important

// //tari2a ula
// function sayHello(username, age) {
//     if (age === undefined) {
//         age = "unknown";
//     }
//     return `Hello ${username} Your Age is ${age}`;
// }
// console.log(sayHello("osama")); iza ma keteb 
//tene parameter bi 2ellak unknown mahalla , yaane bi 3abbe he el 
//kelme bel varaibale age iza badna nsamiya


// //tari2a 2
// function sayHello(username, age) {
//     if (age === undefined) {
//         age = "unknown";
//     }
//     return `Hello ${username} Your Age is ${age}`;
// }
// console.log(sayHello("osama"));



//tari2a 3
// function sayHello(username, age) {
//     age = age || "unknown";
//     return `Hello ${username} Your Age is ${age}`;
// }
// console.log(sayHello("osama"));




//tari2a 3
// function sayHello(username, age = "unknown") {

//     return `Hello ${username} Your Age is ${age}`;
// }
// console.log(sayHello("osama"));




//tari2a 4
// fina na3mul la aya parameter
// function sayHello(username = "unknown", age = "unknown") {

//     return `Hello ${username} Your Age is ${age}`;
// }
// console.log(sayHello());

////////////////////////////
//v61
// function calc(...numbers) {
//     //  iz badna net2akad men mu7atawa  numbers fina ya typeof jaweba object aw
//     // console.log(Array.isArray(numbers));
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i]; // result= result + numbers[i]

//     }
//     return `Final Result Is ${result}`;

// }
// console.log(calc(10, 20, 10, 30, 50, 30));


//v62

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//     document.write(`<div>`);
//     document.write(`<h2>Welcome , ${us}</h2>`);
//     document.write(`<p>Age: ${ag}</p>`);
//     document.write(`<p>Hour Rate: $${rt}</p>`);
//     if (show === "yes") {
//         if (sk.length > 0) {
//             document.write(`<p>Skills : ${sk.join("|")} </p>`);
//         } else {
//             document.write(`<p>SKILLS: no skills</p>`);

//         }

//     } else {
//         document.write(`<p>sKills is Hidden</p>`)
//     }
//     document.write(`</div>`);

// }
// showInfo("osama", 38, 20, "No", "Html", "css");



// challenge
//method1
// function showDetails(a = "Un", b = "Un", c) {
//     
//     document.write(`<div>`);
//     if (c === "true") {
//         document.write(`<h2>welcome ${a} , Your age Is ${b} , You are available For Hire </h2>`);
//     } else {
//         document.write(`<h2>welcome ${a} , Your age Is ${b} , You are not available For Hire </h2>`)
//     }


//     document.write(`</div>`);

// }
// showDetails("osama", 38, "true");






//method2
// function showDetails(a, b, c) {
//     let info = [a, b, c],
//         name,
//         age,
//         avaliability,
//         sentance;

//     for (let i = 0; i < 3; i++) {
//         typeof info[i] === "string"
//             ? (name = info[i])
//             : typeof info[i] === "number"
//                 ? (age = info[i])
//                 : typeof info[i] === "boolean"
//                     ? (avaliability = info[i])
//                     : "incorrect data type";
//     }

//     avaliability === true
//         ? (sentance = "You are avaliable For Hire")
//         : (sentance = "You are not avaliable For Hire");

//     console.log(`Hello ${name}, Your age Is ${age} , ${sentance}`);
// }
// showDetails("Osama", 38, true);
// showDetails(38, "Osama", true);
// showDetails(true, 38, "Osama");
// showDetails(false, "Osama", 38);
/////

///




//method3
// function showDetails(a, b, c) {
//     let info = [a, b, c];
//     let name, age, status, ava;

//     for (let i = 0; i < info.length; i++) {


//         if (typeof info[i] === "number") {
//             age = info[i];


//         } else if (typeof info[i] === "string") {
//             name = info[i];

//         } else if (typeof info[i] === "boolean") {
//             status = info[i];
//         } else {
//             console.log("hello");
//         }




//     }
//     if (status == true) {
//         console.log(`${name} ${status} ${age} good`);

//     } else {
//         console.log(`${name} ${status} ${age} bad`);
//     }


// }

// showDetails("Osama", 38, true);
// showDetails(38, "Osama", true);
// showDetails(true, 38, "Osama");
// showDetails(false, "Osama", 38);


//v64
// let calculator = function (num1, num2) {
//     return num1 + num2;
// };
// console.log(calculator(10, 20));
// function sayhello() {
//     console.log("hello osama");

// }

// document.getElementById("show").onclick = sayhello;

// setTimeout(function () {
//     console.log("Good");
// }, 2000);

// setTimeout(function () { // same as fo2
//     console.log("Good");
// }, 2000);

//v65
//ex1
// function sayMessage(fname, lname) {
//     let message = `Hello`;

//     // Nested function
//     function concatMsg() {
//         message = `${message} ${fname} ${lname}`;
//     }
//     concatMsg();
//     return message; btraje3 el function as a variable
// }
// console.log(sayMessage("osama", "Mohamad"));


//////////////////////////////////////////////////


//ex2
// function sayMessage(fname, lname) {
//     let message = `Hello`;

//     // Nested function
//     function concatMsg() {   // nested
//         return `${message} ${fname} ${lname}`;
//     }

//     return concatMsg(); // btraje3 el function as a value li2an bi return
// }
// console.log(sayMessage("osama", "Mohamad"));

///////////////////////////////////////////////////

//ex3
// function sayMessage(fname, lname) {
//     let message = `Hello`;

//     // Nested function
//     function concatMsg() {
//         function getFullName() { // nested jawa nested
//             return `${fname} ${lname}`;

//         }
//         return `${message} ${getFullName()}`;
//     }

//     return concatMsg();
// }
// console.log(sayMessage("osama", "Mohamad"));

/////////////////////////



//v66
//arrow function
//ex1
// let print = function () {
//     return 10;
// };
// console.log(print());



//ex22
// let print = () => 10; // fina na3mla iza fi one line bas bel function
// let print = _ => 10; // fina na3mla iza fi one line bas bel function ,
//iza mafi parameter
// console.log(print());



//ex3

// let print = function (num) {
//     return num;
//  };

// let print = (num) => num; 1 methode
// let print = num => num;
// console.log(print(10));





//ex4
// let print = (num1, num2) => num1 + num2;
// console.log(print(100, 50));

//v67
// example11 sheggallee
// var a = 1;
// var b = 2;

// function showText() { // cannot access before intialize
//     var a = 10;
//     let b = 20;
//     console.log(`function - from local ${a}`);
//     console.log(`function - from local ${b}`);

// }
// console.log(`from Global ${a}`);
// console.log(`from Global  ${b}`);


// showText();//////////////////////////


//example222
// var a = 1;
// var b = 2;

// function showText() { // bi fut ybarem bel function iza ma la2a varaibale fia 
//     // byetla3 ybarem bel global yaane barra

//     console.log(`function - from local ${a}`);
//     console.log(`function - from local ${b}`);


// }
// showText();












/////////////////////////////////////
//example3
// var a = 1;
// var b = 2;

// function showText() { // malah tecthegl li2an 3arrafna el variable baad

//     console.log(`function - from local ${a}`);
//     console.log(`function - from local ${b}`);
//     var a = 10;
//     let b = 20;

// }
// showText();

///////////////////////////////////

//v68 local and global scope
// bi hayde bye5od men local iza ma la2a local fia bye5od men global
// var x = 10; global
// if (10 === 10) {
//     let x = 50; //local
//     console.log(`From If Block ${x}`);
// }

// console.log(`From Global ${x}`);

//v69
// hayde example tamem
// function parent() {
//     let a = 10;


//     function child() {
//         console.log(a);


//         function grand() {
//             console.log(`From Grand ${a}`);

//         }
//         grand();
//     }
//     child();
// }

// parent();

// hayda example bya3te error li2an mafi ye2ra bel 3akes
// function parent() {
//     let a = 10;


//     function child() {
//         console.log(a);
//         console.log(`From Grand ${b}`);


//         function grand() {
//             let b = 100;
//             console.log(`From Grand ${a}`);
//             console.log(`From Grand ${b}`);

//         }
//         grand();
//     }
//     child();
// }

// parent();


//70
// challenge


// let names = function (...name) {



//     return `<p>STring :  [${name.join("], [")}]=> Done</p > `;
// }
// console.log(names("ali", "hasan", "ali"));



// let names = (...name) => `<p>STring :  [${name.join("], [")}]=> Done</p > `;

// console.log(names("ali", "hasan", "ali"));


//challenge2
// let mynumbers = [20, 50, 10, 60];


// let calc = (one, two, ...nums) => Number(nums) + Number(one) + Number(two);
// console.log(calc(10, 20, 50))// 80






// v71
// method1
// let mynums = [1, 2, 3, 4, 5];
// let newArray = [];
// for (let i = 0; i < mynums.length; i++) {
//     newArray.push(mynums[i] + mynums[i]);

// }
// console.log(newArray);


// //methode2
// let mynums = [1, 2, 3, 4, 5];
// let addself = mynums.map(function (element, index, arr) {
//     console.log(`Current Element => ${element}`);
//     console.log(`Current Index => ${index}`);
//     console.log(`Current Element => ${arr}`);
//     console.log(`Current Element => ${this}`);
//     return element + element;
// }, 9);
// console.log(addself);



// // he teb3a la fo2 men baad tozbit w haraket
// let myNums = [1, 2, 3, 4, 5];
// let addself = myNums.map((a) => a + a);
// console.log(addself);




//methode3
// let myNums = [1, 2, 3, 4, 5];
// function addition(ele) {
//     return ele + ele;

// }


// let add = myNums.map(addition);
// console.log(add);


//v72

// let swappingcases = "ABCabbc"; // 3afna varaibale
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreBooleans = "Elz123er4o";

// let sw = swappingcases.split("").map(function (ele) { // wahde bt7awel el string la array btefsol kell haref la halo he wazifet split
//     // wba3den map bta3mul new array tab3an w bt7et fia el array kelon  wb tenafez shrut
//     return ele === ele.toUpperCase() ? ele.toLocaleLowerCase() : ele.toUpperCase(); // iz el 7aref huwe kbir 3melo sgir w iza ken sgir 3melo kbir
// })
//     .join("");// he bte2lub el array la string
// console.log(sw);// tiba3a ekher natije



// arroqw function



// let sw = swappingcases.split("").map((ele) => ele === ele.toUpperCase() ? ele.toLocaleLowerCase() : ele.toUpperCase()).join("");
// console.log(sw);












// let sw = invertedNumbers.map(function (ele) {

//     return -ele;
// })
// // he bte2lub el array la string
// console.log(sw);// tiba3a ekher natije

// let ign = ignoreBooleans.split("").map(function (ele) {

//     return isNaN(parseInt(ele)) ? ele : "";
// })
//     .join("");
// console.log(ign);























