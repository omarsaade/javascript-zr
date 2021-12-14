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
// let obj1 = {
//     prop1: 1,
//     meth: function () {
//         return this.prop1;
//     },
// };

// let obj2 = {
//     prop2: 2,
//     meth2: function () {
//         return this.prop2;
//     },
// };

// let targetObject = {
//     prop1: 100,
//     prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;
// finalObject.prop4 = 4;
// console.log(finalObject);
// let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

// console.log(newObject);

//////////////////////////////////////////////

//////////DOM
//v86
// let myIdElement = document.getElementById("my_div");
// let myTageElements = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my_span");
// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElement = document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElements[1]);
// console.log(myClassElement[1]);
// console.log(muQueryElement);
// console.log(myQueryAllElement[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);



//v87
//methode1
// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);


// myElement.innerHTML = "Text from <span>Main.js</span> File";
// myElement.textContent = "Text from <span>Main.js</span> File";



// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Picture";
// document.images[0].id = "Pic";
// document.images[0].className = "img";

// document.images[1].src = "https://spacectoon.com";
// document.images[1].alt = "Alto";


//method2
// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://twitter.com");
// myLink.setAttribute("title", "Twitter");


//v88
// Element.attributes
// Element.hasAttribute
// Element.hasAttributes
// Element.removeAttribute

// console.log(document.getElementsByTagName("p")[0].attributes);
// let myP = document.getElementsByTagName("p")[0];


// if (myP.hasAttribute("data-src")) {
//     if (myP.getAttribute("data-src") === "") {
//         myP.removeAttribute("data-src");
//     } else {
//         myP.setAttribute("data-src", "New Value");
//     }

// } else {
//     console.log(`Not found`);
// }


//or

// if (myP.hasAttributes()) {
//     console.log(`has attributes`);

// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//     console.log(`has Attributes`);
// } else {
//     console.log(`Div Has No Attributes`);
// }

//////////////////////////
//v89
//DOM
// create Element
// create Comment
// createTextNode
// createAttribute
// appendChild



// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product one");
// let myComment = document.createComment("This is my div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// //Append Comment To Element
// myElement.appendChild(myComment);
// myElement.appendChild(myText);
// document.body.appendChild(myElement);

//v90
//<div  class="product" >
//<h3>text</h3>
// <p>text</p>
//</div>

//methode1

// let myElement = document.createElement("div");

// let myh = document.createElement("h3");
// let myp = document.createElement("p");
// let myText = document.createTextNode("Product one");
// let myT = document.createTextNode("Product two");

// myElement.className = "product";


// myh.appendChild(myText);

// myElement.appendChild(myh);


// myp.appendChild(myT);
// myElement.appendChild(myp);



// document.body.appendChild(myElement);

//mehode2
// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("product Title");

// let myParagraphText = document.createTextNode("Product Description");


// // add heading Text
// myHeading.appendChild(myHeadingText);
// // add heading To Main Element
// myMainElement.appendChild(myHeading);

// // add paragraph text
// myParagraph.appendChild(myParagraphText);

// // add paragraph to mainelement
// myMainElement.appendChild(myParagraph);
// myMainElement.className = "product";
// document.body.appendChild(myMainElement);

//v91
// let myElement = document.querySelector("div");
// console.log(myElement);
// console.log(myElement.children);//tag html
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);//  Nodeslist     btker keslhi maktub kelshi kelshi
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);// element shu  maken
// console.log(myElement.lastChild);// element shu maken

// console.log(myElement.firstElementChild);//tag html
// console.log(myElement.lastElementChild);//tag html






