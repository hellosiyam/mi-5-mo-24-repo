const section5 = document.getElementById("main-continer")
const section = document.createElement("section");
section.innerHTML = `
    <h1>Section tittle-5 </h1>
    <ul>
        <li>List item-1 </li>
        <li>List item-2 </li>
        <li>List item-3 </li>
        <li>List item-4 </li>
    </ul>
`
section5.appendChild(section)
