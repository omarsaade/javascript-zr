// //v115 destr
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;


// let myFriends = ["ahmed", "sayed", "ali", "maysa"];
// // [a, b, c, d,] = myFriends; or
// // [a, b, c] = myFriends;
// [a = "A", b, c, d, e = "Osama"] = myFriends;// bi barem 3al a fo2 , iza ma la2aha bi het imta tahet

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// // console.log(e); console.log(myFriends[4]); jawebo undefined


// // tagrueb jdide
// // let[x,y,z] = myFriends;
// let [, y, , z] = myFriends;

//v116
// console.log(y);
// console.log(z);
// let myFriends = ["ahmed", "sayed", "ali", ["shady", "amr", ["mohamed", "Gamal"]]];
// // document.write(myFriends[3][2][1]);


// [a, b, c, [d, e, [f, g]]] = myFriends;
// document.write(d);
// document.write(g);
//
//V117 swapping
// let book = "video";
// let video = "Book";
//
// let slash = book;//video
//
// book = video;//book
//
// video = slash//video
//

// [book, video] = [video, book];
//
// console.log(book);//book
// console.log(video);//video

// V118
// const user = {
// theName: "osama",
// theAge: 39,
// theTitle: "Developer",
// theCountry: "Egypt",
// };
//
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);
//
// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;




// ({ theName, theAge, theTitle, theCountry } = user);
// let { theName, theAge, theTitle, theCountry } = user;




// console.log(theName);
//
// console.log(theAge);
//
// console.log(theTitle);
//
// console.log(theCountry);
//
//
//
// v119//object destructuring
// const user = {
// theName: "osama",
// theAge: 39,
// theTitle: "Developer",
// theCountry: "Egypt",
// theColor: "black",
// skills: {
// html: 49,
// css: 30,
// },
// };
//
// const { theName: n,
// theAge: a,
// theCountry,
// theColor: co = "red",
// skills: { html: h, css }, }
// = user;
//
// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`my HTML skill progress Is ${h}`);
// console.log(`my css SKill progress Is ${css}`);
//
// const { html: skillone, css: skilltwo } = user.skills;
//
// console.log(`my HTML skill progress Is ${skillone}`);
//
// console.log(`my css SKill progress Is ${skilltwo}`);
//
//
//


//v120
//Destructuring function parameters

// const user = {
//     theName: "osama",
//     theAge: 39,
//     skills: {
//         html: 70,
//         css: 80,
//     },
// };

// showDetails(user);//trigger aw call

// function showDetails(obj) {
//     console.log(`your name is ${obj.theName}`);
//     console.log(`your name is ${obj.theAge}`);
//     console.log(`your name is ${obj.skills.css}`);

// }

// destruct
// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
// console.log(`your name is ${n}`);
// console.log(`your name is ${a}`);
// console.log(`your name is ${c}`);

// }

//v121
// const user = {
//     theName: "osama",
//     theAge: 39,
//     skills: ["HTML", "CSS", "JavaScript"],
//     addresses: {
//         egypt: "cairo",
//         ksa: "Ryiadh"
//     },
// };

// let { theName,
//     theAge,
//     skills: [one, two, three],
//     addresses: { egypt: e },
// } = user;

// console.log(`your name is ${theName}`);
// console.log(theAge);
// console.log(`${two} ${three}`);
// console.log(e);
// console.log(`ur live in: ${e}`);


//v122
//challenge


// let chosen = 3;
// let myFriends = [
//     { title: "osama", age: 39, available: false, skills: ["HTML ", "CSS "] },
//     { title: "ahmed", age: 25, available: true, skills: [" Python", "Django "] },
//     { title: "Sayed", age: 33, available: false, skills: ["PHP ", " laravel"] },
// ];

//meth11111


// if (chosen == 1) {
//     let [{ title: t = "osama", age: g = "39", available: av = true, skills: [, two] }, ,] = myFriends;

//     if (av == true) {
//         av = "available";

//         console.log(`${t} ${g} ${av} ${two}`);
//     } else {
//         av = " not available";

//         console.log(`${t} ${g} ${av} ${two}`);
//     }


// }





// else if (chosen == 2) {
//     let [, { title: b = "ahmed", age: k = "25", available: avl = false, skills: [, twos] },] = myFriends;

//     if (avl == false) {
//         avl = " not available";

//         console.log(`${b} ${k} ${avl} ${twos}`);
//     } else {
//         avl = "available";
//         console.log(`${b} ${k} ${avl} ${twos}`);
//     }
// }





// else {
//     let [, , { title: m = "sayed", age: f = "33", available: avll = true, skills: [, twoss] }] = myFriends;
//     if (avll == true) {
//         avll = "available";
//         console.log(`${m} ${f} ${avll} ${twoss}`);
//     } else {
//         avll = "not available"
//         console.log(`${m} ${f} ${avll} ${twoss}`);
//     }
// }

///////////










//meth2


// if (chosen == 1) {
//     [
//         {
//             title,
//             age,
//             available,
//             skills: [, a],
//         },
//     ] = myFriends;
// }



// else if (chosen == 2) {
//     [
//         ,
//         {
//             title,
//             age,
//             available,
//             skills: [, a],
//         },
//     ] = myFriends;
// }



// else {
//     [
//         {},
//         {},
//         {
//             title,
//             age,
//             available,
//             skills: [, a],
//         },
//     ] = myFriends;
// }
// let isAvailable = available ? "available" : "Not available";

// console.log(title);
// console.log(age);
// console.log(isAvailable);
// console.log(a);
/////////////////////////////////////
//v123
// let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3, "A"]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();// insh2 set

// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");
// console.log(`is set has => A ${myUniqueData.has("a")}`);
// console.log(`IS set has => A ${myUniqueData.has("a".toLocaleUpperCase())}`);

// console.log(myData);
// console.log(myUniqueData);


// console.log(myUniqueData.size);


// console.log(myData[0]);
// console.log(myUniqueData[0]);

// // myUniqueData.delete(2);// btemi ra2em 2 w btred true iza la2eto w iza ma la2eto
// //btestnewlak false.
// console.log(myUniqueData.delete(2));

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear();

// console.log(myUniqueData);

// console.log(myUniqueData.size);


//v124
//type of data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(mySet);

//size

console.log(`Size of Elements Inside Set Is : ${mySet.size}`);

let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());


//foreach
mySet.forEach((el) => console.log(el));
console.log("#".repeat(20));

//WeakSet
//type of data
let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);


//values + keys [Alias For Values]
let iter = myws.keys();//error la yujad hik shi bel weakset

console.log(iter.next().value);
