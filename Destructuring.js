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

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
// console.log(mySet);

// //size

// console.log(`Size of Elements Inside Set Is : ${mySet.size}`);

// let iterator = mySet.keys();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());


// //foreach
// mySet.forEach((el) => console.log(el));
// console.log("#".repeat(20));

// //WeakSet
// //type of data
// let myws = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myws);


//values + keys [Alias For Values]
// let iter = myws.keys();//error la yujad hik shi bel weakset

// console.log(iter.next().value);


//v125
//map data vs object

// --map => does not contain by default
// --object=>has default keys

// --map can be anthing [function,object, any Primitive dat types]
// --object => string or Symbol


// --map=> ordered by insertion
// --object => not 100% till Now

// --map=> get items by size
// --object=> need to do manually

// --map => can be directly iterated
// --object => not directly and neede to use objects.keys()


// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();


// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//     10: "number",
//     "10": "String",
// };


// console.log(myNewObject[10]);


// let myNewMap = new Map();
// myNewMap.set(10, "number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({ a: 1, b: 2 }, "Object");
// myNewMap.set(function doSomething() { }, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("####");


// console.log(myNewObject);
// console.log(myNewMap);


//v126
//Map Data Type
// Methods
// ----set
// ----get
// ------delete
// ------clear
// -------has


// propreties
// ------size

// let myMap = new Map([
//     [10, "number"],
//     ["Name", "String"],
//     [false, "Boolean"],
// ]);


//myMap.set(10,"Number");
// myMap.set("Name","String");

// console.log(myMap);


// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));

// console.log("####");

// console.log(myMap.has("Name"));//true or false

// console.log("###");

// console.log(myMap.size);

// console.log(myMap.delete("Name"));//true or false

// myMap.clear();

// console.log(myMap.size);


/////////////////////////////////////////
//v127
//map byeb2a el key hata law nhat imto
//null,byet7afaz el key bel memory


//mawjude el sura bel screenshot wadha




//weamap biellak el key undefined,,khalas kabo 3al zbele
//li2an huwe weakly referenced

// let mapUser = { thyeName: "Elzero" };

// let myMap = new Map();

// myMap.set(mapUser, "object Value");

// mapUser = null;//override the reference

// console.log(myMap);

// console.log("#".repeat(20));

// let wMapUser = { theName: "Elzero" };

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "object value");

// wMapUser = null;

// console.log(myWeakMap);

///////////////////////////////////////////

//v128
// Array.from(iterable , mapfunc , this);
// varaible
// string numbers
// set
// using the map function
// arrow function
// shorten the Method +  use agruments

// console.log(Array.from("1234aaa"));
// console.log(Array.from("12345", function (n) {

//     return +n + +n;
// }



// ));

// console.log(Array.from("12345", (n) => +n + +n));

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(mySet); // jaweba huwe set
// console.log(Array.from(mySet));//jaweba huwe array

// // console.log([new Set(myArray)]);// set
// console.log([...new Set(myArray)]);// array future

// function af() {
//     return Array.from(arguments);
// }
// console.log(af("osama", "ahmed", "sayed", 1, 2, 3));
// //arguments is an Array-like object accessible inside functions that contains the
// // values of the arguments passed to that function.



// function func1(a, b, c) {
//     console.log(arguments[0]);
//     // expected output: 1

//     console.log(arguments[1]);
//     // expected output: 2

//     console.log(arguments[2]);
//     // expected output: 3
//   }

//   func1(1, 2, 3);

//v129'
//array.copyWithin




// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3);//[10,20,30,10,20,30,40]
// myArray.copyWithin(4, 6);//[10,20,30,40,"B","A","B"]
// myArray.copyWithin(4, -1);//[10,20,30,40,"B","A","B"]
// myArray.copyWithin(1, -2); //[10,"A","B","40",50,"A","B"]
// myArray.copyWithin(1, 5, 6) or(1, -2, -1);["10", "A", 30, 40, 50, "A", "B"]
// console.log(myArray);



//v130'
// --Array.some(CallbackFunc(Element , Index , Array), This Argument)
//--callbackfunc => the Curent Element to Process
//index => undex of cureent element
//array => the current Array working With
//this Argument


// el some meth hye betaba2 function 3a kell 3onsor men 3anaser el array w bt3tiha sharet m3ayan ..law la2et hal sharet t7a2a2 bta3ti true
// bi gad el naazar kam 3onsor fi bel array ,,hye ger 3n filter

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// array

// let myNumber = 10;

// let check = nums.some(function (e) {
//     console.log("Test");
// }
// );


// let check = nums.some(function (e) {
//     return e > this;
// }, myNumber);


// // let check = nums.some((e) => e > 5);
// console.log(check);

// function checkValues(arr, val) {
//     return arr.some(function (e) {
//         return e === val;

//     });
// }

// console.log(checkValues(nums, 20));

// console.log(checkValues(nums, 5));

// let range = {
//     min: 10,
//     max: 20,
// };

// let checkNumberInRange = nums.some(function (e) {
//     // console.log(this.min);
//     // console.log(this.max);
//     return e >= this.min && e <= this.max;
// }, range);
// console.log(checkNumberInRange);

//v131

// Array.every(callbackFunc(Element , Index , Array),This Argument)
//CallbackFunc => Function TO Run on every Element on The Given Array
//--Element => the current  Element to Process
//--index => Index of current Element
// --Array=> the current Array working with
// --this Argument => value to use as this when executing CallbackFunc
// const locations = {
//     20: "place 1",
//     30: "place 2",
//     50: "place 3",
//     40: "place 4",
// };

// let mainLocation = 15;

// let locationsArray = Object.keys(locations);

// console.log(locationsArray);// he btjib object mehna badna array

// let locationsArrayNumbers = locationsArray.map((n) => +n);

// console.log(locationsArrayNumbers);

// let check = locationsArrayNumbers.every(function (e) {
//     return e > this;

// }, mainLocation);
// console.log(check);



//v132
//spread Operator => ...Iterable
// "Allow Iterbale tp Expand In Place"

//spread with String => Expand String

// console.log("Osama");
// console.log(..."Osama");
// console.log([..."Osama"]);

// //concatenate Arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];

// // console.log(allArrays);

// //copy Array

// let copiedArray = [...myArray1];
// console.log(copiedArray);

// //push Inside Array

// let allFriends = ["Osama", "ahmed", "sayed"];
// let thisYearFriends = ["sameh", "mahmoud"];

// allFriends.push(...thisYearFriends);

// console.log(allFriends);

// //use with Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(...myNums));


// //spread with Objects => Merge objects

// let objOne = {
//     a: 1,
//     b: 2,
// };

// let objTwo = {
//     c: 3,
//     b: 4,
// };

// console.log({ ...objOne, ...objTwo, e: 5 });





