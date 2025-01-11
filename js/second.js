const newSection = document.getElementById("main-continer");
const section4 = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Section tittle-4";
section4.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "List item-1";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "List item-2";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "List item-3";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "List item-4";
ul.appendChild(li4);

section4.appendChild(ul);

newSection.appendChild(section4);