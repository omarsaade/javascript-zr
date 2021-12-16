//v93
// let userInput = document.querySelector("[name='username']");// 3melna select
// //3al input username w samayneha userInput
// let ageInput = document.querySelector("[name='age']");// 3melna select 3al input el tenye
// // w samayneha ageInput

// document.forms[0].onsubmit = function (e) { // fawatne 3al form w 3am nechtegel 3al submit
//     let userValid = false;// default
//     let ageValid = false;// default
//     if (userInput.value !== "" && userInput.value.length <= 10) {
//         userValid = true;

//     }

//     if (ageInput.value !== "") {
//         ageValid = true;
//     }

//     if (userValid === false || ageValid === false) {
//         e.preventDefault();
//     }
// };

// // shi tene
// document.links[0].onclick = function (event) {
//     console.log(event);
//     event.preventDefault();// hayde hye yale btwa2ef el ossa

// }

//v94
// let one = document.querySelector(".one");//class
// let two = document.querySelector(".two");

// window.onload = function () {
//     two.focus();
// };

// one.onblur = function () {
//     document.links[0].click();
// }


//V95
//DOM
// ClassList
//length
//contains
//item
//add
//remove
//toggle

// let element = document.getElementById("my-div");
// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("osama"));// iza fi bya3ti true ,yaane hye btbarem
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));// bya3tik esem el class mne el classlist lama enta thot index

// element.onclick = function () {
//     element.classList.toggle("show");//btshuf iza class show mawjud,iza la2a bi shilo,ma la2a bi hetto

// }

//v96
// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight: bold; color: green ; opacity:0.9";

// //method1
// element.style.removeProperty("color");// heda el shegel bisir bel inline style bel tag
// element.style.setProperty("font-size", "40px", "important");

// //method2
// document.CSSStyleSheets[0].rules[0].style.removeProperty("line-height");// heda bisir bel file main.css
// document.CSSStyleSheets[0].rules[0].style.setProperty("background-color", "red", "important");


/////////////////////////////////////
//v97
// DOM
// Before
// after
// append
// prepend
// remove


// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");
// let createdH = document.createElement("h1");

// element.before("hello from js");//barra div 2abel
// element.after("hello from js");// barra div baad

// element.before(createdP);// barra div abel



// element.prepend("hello from js");//jawa div awal shi

// element.prepend(createdP);//jawa div awal shi
// element.append(createdP);//jawa div ekher shi


// element.remove();// shilo men el hayet ma bte2bal shi jaweta
// //display:none bte5fe w hye ger elememnt.remove();

// element.prepend(createdP);
// element.prepend(createdH);


///////////////////
//v98
// let span = document.querySelector(".two");

// console.log(span.nextSibling);// hayal shi
// console.log(span.nextElementSibling);//html lezem ykun
// console.log(span.nextElementSibling.remove());//shilo
// console.log(span.previousElementSibling);
// console.log(span.parentElement);// ahlon yaane div

// span.onclick = function () {
//     span.parentElement.style.opacity = '0';
// }

// span.onclick = function () {
//     span.parentElement.remove();
// }




/////////////////////////////////////////////////////////

//v99
//DOM
//cloneNode(Deep);

// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");
// myP.id = `${myP.id}-clone`;
// myDiv.appendChild(myP);
///////////////////////////////////////////

//v100
// let myP = document.querySelector("p");// a5adna element p

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//     console.log("message from on click1");
// }
// function two() {
//     console.log("Message from on click 2");
// }
// window.onload = "osama";

// myP.addEventListener("click", function () {
//     console.log("Message from onclick 1 event");

// });

// myP.addEventListener("click", one);


// myP.onclick = function () { // bas nef2os 3al p
//     let newP = myP.cloneNode(true); // bye5la2 p esma newP w 3anda class clone
//     newP.className = "clone";
//     document.body.appendChild(newP);// bye5la2a jawa code ekher shi w bi zahera bi document

// };

// let cloned = document.querySelector(".clone");

// cloned.onclick = function () {
//     console.log(" Iam cloned");

// };

// document.addEventListener("click", function (evento) {
//     if (evento.target.className === "clone") {
//         console.log("I am cloned");

//     }

// });

//v101

let header = document.createElement("div");//div
let body = document.createElement("div");//div
let footer = document.createElement("div");//div
let table = document.createElement("table");//div
// let span = document.createElement("span");
// let myHeadingText = document.createTextNode("Elzero");
let ul = document.createElement("ul");
let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let tr3 = document.createElement("tr");
let tr4 = document.createElement("tr");
let tr5 = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
let td5 = document.createElement("td");
let td6 = document.createElement("td");
let td7 = document.createElement("td");
let td8 = document.createElement("td");
let td9 = document.createElement("td");
let td10 = document.createElement("td");
let td11 = document.createElement("td");
let td12 = document.createElement("td");
let td13 = document.createElement("td");
let td14 = document.createElement("td");
let td15 = document.createElement("td");
let a1 = document.createElement("a");
let a2 = document.createElement("a");
let a3 = document.createElement("a");
let a4 = document.createElement("a");
let a5 = document.createElement("a");
let l1 = document.createElement("li");
let l2 = document.createElement("li");
let l3 = document.createElement("li");
let l4 = document.createElement("li");
let l5 = document.createElement("li");

a1.textContent = "Elzero";
a2.textContent = "Home";
a3.textContent = "about";
a4.textContent = "service";
a5.textContent = "contact";

//
td1.innerHTML = "1<br>product";
td2.textContent = "product";
td3.textContent = "product";
td4.textContent = "product";
td5.textContent = "product";
td6.textContent = "product";
td7.textContent = "product";
td8.textContent = "product";
td9.textContent = "product";
td10.textContent = "product";
td11.textContent = "product";
td12.textContent = "product";
td13.textContent = "product";
td14.textContent = "product";
td15.textContent = "product";


























// header.className = "a";
// span.className = "b";
l5.className = "active";
l4.className = "active";
l3.className = "active";
l2.className = "active";
l1.className = "activo";






// span.prepend(myHeadingText);










tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);

tr2.appendChild(td4);
tr2.appendChild(td5);
tr2.appendChild(td6);

tr3.appendChild(td7);
tr3.appendChild(td8);
tr3.appendChild(td9);

tr4.appendChild(td10);
tr4.appendChild(td11);
tr4.appendChild(td12);

tr5.appendChild(td13);
tr5.appendChild(td14);
tr5.appendChild(td15);
















// header.prepend(span);

table.appendChild(tr1);
table.appendChild(tr2);
table.appendChild(tr3);
table.appendChild(tr4);
table.appendChild(tr5);


header.appendChild(ul);
ul.appendChild(l5);
ul.appendChild(l4);
ul.appendChild(l3);
ul.appendChild(l2);
ul.appendChild(l1);
l1.appendChild(a1);
l2.appendChild(a2);
l3.appendChild(a3);
l4.appendChild(a4);
l5.appendChild(a5);

body.appendChild(table);






document.body.appendChild(header);
document.body.appendChild(body);
let element = document.querySelector("ul");
let act = document.querySelector(".activo");
let ele = document.querySelectorAll(".active");
let f = document.querySelector("table");
let e = document.querySelectorAll("tr");
let p = document.querySelectorAll("td");
// let ele = document.querySelector(".c");
// let elem = document.querySelectorAll(".li");

// act.forEach((act) => {
//     act.style.padding = "14px 16px";
// });
// act.forEach((act) => {
//     act.style.padding = "block";
// });



ele.forEach((ele) => {
    ele.style.float = "right";
});

ele.forEach((ele) => {
    ele.style.paddingLeft = "14px";
});

ele.forEach((ele) => {
    ele.style.display = "block";
});



element.style.cssText = " list-style-type: none; margin: 0; padding: 0;overflow: hidden; font-size:20px";

act.style.cssText = "color :green; font-weight:bold";
f.style.cssText = "border: 1px solid black; width:100%";
// e.style.cssText = "border: 1px solid black;";
// d.style.cssText = "border: 1px solid black;";
// d.style.cssText = "border-collapse: collapse;";


p.forEach((p) => {
    p.style.fontSize = "20px";
});












