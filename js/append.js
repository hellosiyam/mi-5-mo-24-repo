const frute = document.getElementById("fevorits");
const li = document.createElement("li");
li.innerText="Jack-frutes";
frute.append(li);

const mainContiner = document.getElementById("main-content");

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "This section for Fast-Food";
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement("li");
li1.innerText = "Birainy";
ul.append(li1);

const li2 = document.createElement("li");
li2.innerText = "Bargure";
ul.append(li2);

const li3 = document.createElement("li");
li3.innerText = "Coffie";
ul.append(li3);

section.appendChild(ul);

mainContiner.appendChild(section)

const cloting = document.getElementById("main-content");
const section1 = document.createElement("section");
const h1ForCloting = document.createElement("h1");
h1ForCloting.innerText = "This Section for cloting";
section1.appendChild(h1ForCloting);

const ulForCloting = document.createElement("ul");
const li1ForCloting = document.createElement("li");
li1ForCloting.innerText = "T-Shirt"
ulForCloting.append(li1ForCloting);

const li2ForCloting = document.createElement("li");
li2ForCloting.innerText = "Pant";
ulForCloting.append(li2ForCloting);

const li3ForCloting = document.createElement("li");
li3ForCloting.innerText = "Show";
ulForCloting.append(li3ForCloting);

section1.appendChild(ulForCloting);

cloting.appendChild(section1)

const car = document.createElement("section");
car.innerHTML = `
<h1>This section for car </h1>
<ul>
    <li>Toyota</li>
    <li>Nissan</li>
    <li>BMW</li>
    <li>Audi</li>
</ui>
`

mainContiner.appendChild(car);

const phone = document.createElement("section")
phone.innerHTML = `
<h1> This Section is for Phone section </h1>
<ul>
    <li>I Phone </li>
    <li>Samsung </li>
    <li>Vivo </li>
    <li>Pixel </li>
</ul>
`

mainContiner.appendChild(phone)

