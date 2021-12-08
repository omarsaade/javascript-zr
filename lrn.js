//38
// let day = "A";

// switch (day) {

//     case 0:
//         console.log("saturday");
//         break;
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//     case 3:
//         console.log("Monday");
//         break;
//     default:
//         Console.log("unkown Day");
//         break;
// }

//39


// challengeeeeee
// let job = "Manager";
// let salary = 0;

// switch (job) {
//     case "Manager":
//         salary = 8000;
//         break;
//     case "IT":
//     case "support":
//         salary = 6000;
//         break;
//     case "Developer":
//     case "Designer":
//         salary = 7000;
//         break;
//     default:
//         salary = 4000;
// }
// console.log({ salary });


//////////////////////// challengeeeee

// let holidays = 0;
// let money = 0;

// if (holidays === 0) {
//     money = 8000;
// } else if (holidays === 1 || holidays === 2) {
//     money = 3000;
// } else if (holidays === 3) {
//     money = 2000;
// } else if (holidays === 4) {
//     money = 1000;
// } else if (holidays === 5) {
//     money = 0;
// } else {
//     money = 0;
// }
// console.log({ money });

//v40 arrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
// console.log(`hello ${myFriends[0]} `); talle3333 menaaa
// console.log(`hello ${myFriends[2]}`);
// console.log(`${myFriends[1][2]}`);   h
// console.log(`hello ${myFriends[3][1]}`); fut 3a tene array na2e index 1
// console.log(`hello ${myFriends[3][1][2]}`);

// console.log(myFriends);
// myFriends[1] = "Gamal";  zidddddddddddd 3layaaaa
// console.log(myFriends);
// myFriends[3] = ["sameh", "ammer"];
// console.log(myFriends);
// console.log(Array.isArray(myFriends));

//arrayyyyyyy v41
// let myfriends = ["Ahmed", "mohamad", "sayed", "alaa"];
// console.log(myfriends.length); 4
// myfriends[myfriends.length - 1] = "zuz";     ["Ahmed", "mohamad", "sayed", "zuz"];
// myfriends.length = 3;
// myfriends[3] = "Gamal";
// myfriends[6] = "zuz";  btzido bi kell el a7well w li ablo bthethon *2empty aw 3 aw 4 hasab..
// console.log(myfriends);
// console.log(myfriends.length);


//v42
// Arrays methods [adding and removing]
// unshift("","" ) Add Element to The first
// Push("","" ) add element to the en
// shift() Remove first Element from Array
// Pop() remove last element from array

// let myFriends = ["ahmed", "mohamed", "sayed", "alaa"];
// console.log(myFriends);
// myFriends.unshift("osama", "nabil");
// console.log(myFriends);
// myFriends.push("Samah", "Eman")
// console.log(myFriends);
// let first = myFriends.shift();
// console.log(myFriends);
// console.log(`first Name is ${first}`);
// let last = myFriends.pop();
// console.log(myFriends);
// console.log(`Last Name Is ${last}`);



//v43
// indexof(search element , from index (opot))
// lastindexof(search element , from index (opot))
// includes(valueofFind ,fromindex[opt])


// let myfriends = ["ahmed", "mohamed", "sayed", "alaa", "ahmed"];
// console.log(myfriends);
// console.log(myfriends.indexOf("ahmed"));
// console.log(myfriends.indexOf("ahmed", 2));

// console.log(myfriends.lastIndexOf("ahmed"));
// console.log(myfriends.lastIndexOf("ahmed", 2));

// console.log(myfriends.includes("ahmed"));
// console.log(myfriends.includes("ahmed", 2));

// if (myfriends.lastIndexOf("osama") === -1) {
//     console.log("not found");
// }
// console.log(myfriends.indexOf("osama"));
// console.log(myfriends.indexOf("osama"));


// let myfriends = [10, "sayed", "ali", "90", 9000, 100, 20, "10", -20, -10];

// console.log(myfriends);
// console.log(myfriends.sort()); hasab yaane - , 0 ,1,2,string
// console.log(myfriends.reverse());
// console.log(myfriends.sort().reverse());


//v45
// let myFriends = ["ahmed","sayed","ali","osama","gamal","amer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1,3)); 2 bas mabye5do 3 deyman regle
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1,-2));
// console.log(myFriends.slice(-4,-2));
// console.log(myFriends);

// myFriends.splice(0,0 ,"sameer","samara"); ballesh men sefer shil 0 wzid tnen awal shi
// myFriends.splice(0,1 ,"sameer","samara");
// myFriends.splice(1,2,"sameer","samara");
// console.log(myFriends);
//

//arrays methods
// concat(array , array); =>return a new array
//join(sperator) return a string

// let myfriends = ["ahmed", "mhamad", "ali", "khaled", "hsein"];
// let myNewfriends = ["samar", "samara"];
// let schoolFriends = ["haytham", "raed"];

// let allfriends = myfriends.concat(myNewfriends);
// let allfriends = myfriends.concat(myNewfriends, schoolFriends);
// let allfriends = myfriends.concat(myNewfriends, schoolFriends, "gamell", [1, 2]);

// console.log(allfriends);

// console.log(allfriends.join()); birrdedo string deyman ,bta3mul fasel
// console.log(allfriends.join("")); no space
// console.log(allfriends.join(" @ ")); space ma3 
// console.log(allfriends.join("|"));
// console.log(allfriends.join("|").toUpperCase());


// let zero = 0;
// let counter = 3;
// let my = ["ahmed", "mazero", "elham", "osama", "gamal", "ammer"];


// console.log(my.slice(zero, ++counter).reverse());

// console.log(my.slice(++zero, --counter).reverse());  // zero = 1; counter = 3


// my.slice(zero, counter).reverse().join('').replace('hamma',''); elzero


// console.log(my.slice(zero, counter).reverse()[--zero].slice(zero, --counter) + my.slice(++zero, ++counter).reverse()[zero].slice(--counter)); elzero



//example1
// let myfriends = ["osama", "ahmed", "sayed", "ali", "amira"];
// methods1
//console.log(myfriends[0]);
// console.log(myfriends[1]);
// console.log(myfriends[2]);
// console.log(myfriends[3]);
// console.log(myfriends[4]);

//methods 2
// for (let i = 0; i < myfriends.length; i++) {

//     console.log(myfriends[i]);
// }




//v49
//example2
// let myfriends = [1, 2, "osama", "ahmed", "sayed", "ali", "amira"];

//methods 1
// let onlynames = [];

// for (let i = 0; i < myfriends.length; i++) {
//     if (typeof myfriends[i] === "string") {
//         onlynames.push(myfriends[i]);
//     }

// }
// console.log(onlynames);






//methods2
// if (typeof myfriends[0] === "string") {
//     onlynames.push(myfriends[0]);
// }

// if (typeof myfriends[1] === "string") {
//     onlynames.push(myfriends[1]);

// }
// if (typeof myfriends[2] === "string") {
//     onlynames.push(myfriends[2]);

// }

// if (typeof myfriends[3] === "string") {
//     onlynames.push(myfriends[3]);

// }

// console.log(onlynames);

// v50

// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "green", "black"];
// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//     console.log("#".repeat(15));
//     console.log(`${products[i]}`);
//     console.log("#".repeat(15));
//     console.log("colors:");
//     for (let j = 0; j < colors.length; j++) {
//         console.log(`${colors[j]}`);

//     }
//     console.log("models:");

//     for (let k = 0; k < models.length; k++) {
//         console.log(`${models[k]}`);

//     }
// }
/////////////////////////////////////////

//example1
// let products = ["keyboard", 1, 2, "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "green", "black"];

// for (let i = 0; i < products.length; i++) {

//     if (typeof products[i] === "number") {

//         continue;  //bas tusal tla3 men kelshi khalas
//         //continue yaane shill el number w kamel tibe3et el be2e rawe2
//     }
//     console.log(products[i]);
// }

//example2
// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "green", "black"];

// mainLoop: for (let i = 0; i < products.length; i++) {

//     console.log(products[i]);
//     nestedLoop: for (let j = 0; j < colors.length; j++) {
//         console.log(`-${colors[j]}`);
//         if (colors[j] === "green") {
//             break nestedLoop; or break mainLoop;
//         }

//     }

// }

////////////////////////////

//v52
//method1

// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// for(let i = 0 ; i< products.length; i++) {
//     console.log(products[i]);
// }





// methods2
// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let i = 0;
// for (; ;) {
//     console.log(products[i]);
//     i++; // or i = i + 2;

//     if (i === products.length) break;
// }

/// v53
// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "green", "black"];
// let showCount = 5;
// document.write(`<h1>${showCount} Products </h1> `);
// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`);
//     document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//     for (let j = 0; j < colors.length; j++) {
//         document.write(`<p>${colors[j]}</p>`);

//     }
//     document.write(`<p>${colors.join("|")}</p>`);
//     document.write(`</div>`);
// }

// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];

//methods1
// let index = 0;
// while (index < products.length) { // iza hik nafezzzz
//     console.log(products[index]);
//     index += 1;
// }


// ma3ulmet

// let index = 0;
// while (index < 10) {
//     console.log(index);
//     index += 1;
//     if (index === 3) {
//         break;
//     }
// }
/////////////////////////////////////////
//



//v55

// let products = ["keyboard", "mouse", "Pen", "pad", "monitor"];

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (false);
// console.log(i);



// //v56
// let myadmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera", "hsein"];
// let myEmployees = ["Amgad", "Samah", "Ammeer", "Omar", "Othman", "Amany", "Samia", "hamd"];
// let showCount = myadmins.length;
// document.write(`<div>we Have X Admins </div>`);
// document.write(`<div>we Have ${showCount} Admins </div> `);

// for (let i = 0; i < myadmins.length; i++) {
//     document.write(`<div>`);
//     document.write(`<hr>`);


//     document.write(`<p>the admins for team ${i + 1} is ${myadmins[i]}</p>`);


//     document.write(`<h2>Team members</h2>`);




//     for (let j = 0, n = 1; j < myEmployees.length; j++) {


//         if (myadmins[i][0].toLowerCase() === myEmployees[j][0].toLowerCase()) {
//             document.write(`<p>-${n}${myEmployees[j]}</p>`);

//             n++;
//         }


//         document.write(`</div>`);
//     }
// }


