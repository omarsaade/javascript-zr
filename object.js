//v79
// object


// let user = {
//     // propreties
//     theName: "Osama",
//     theAge: 38,
//     // methods
//     sayHello: function () {
//         return `Hello`;
//     },
// };
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());


//v80
// let myVar = "country";
// let user = {

//     theName: "Osama",
//     country: "Egypt",
//     "country of": "lebanon",

// };
// console.log(user.theName);
// console.log(user.country);
// console.log(user['country of']);
// console.log(user[myVar]);


//v81
// let available = true;// he hata law hatayta hon ma ela 3azze bel hayet
// let user = {
//     name: "Osama",
//     age: 38,
//     skills: ["HTML", "CSS", "JS"],
//     available: false,
//     addresses: {
//         ksa: "Riyadh",
//         egypt: {
//             one: "cairo",
//             two: "Giza",
//         },
//     },
//     checkAv: function () {
//         if (user.available === true) {
//             return `Free For Work`;
//         } else {
//             return `Not Free`;
//         }

//     },

// };



// console.log(user.name);
// console.log(user.age);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]);
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);
// console.log(user.checkAv());


//v82
//methode1 for crertaion object
// let user = { ///// awal tari2a
// age : 20,
// };
// aw methode 2
// let user = new Object({
//     age: 20,
// });
///////////////////////////////////mnkamel baad ma ansha2na
// console.log(user);

// user.age = 38;
// user["country"] = "egypt";

// user.sayHello = function () {
//     return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello);


//v83
// console.log(this);
// console.log(this === window);

// myVar = 100;
// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello() {
//     console.log(this);
//     return this;
// }



// sayHello();
// console.log(sayHello() === window);
// document.getElementById("cl").onclick = function () {
//     console.log(this);

// };

// let user = {
//     age: 38,
//     ageInDays: function () {
//         return this.age * 365;

//     },

// };
// 
// console.log(user.age);
// console.log(user.ageInDays());


// //v84
// let user = {
//     age: 20,
//     doubleAge: function () {
//         return this.age * 2;

//     },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());


// let obj = Object.create({});
// obj.a = 100;
// console.log(obj);

// let copyobj = Object.create(user);
// copyobj.age = 50;
// console.log(copyobj);// {age:50}
// console.log(copyobj.age);//50
// console.log(copyobj.doubleAge());//100


//v85






