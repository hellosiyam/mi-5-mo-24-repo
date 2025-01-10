const sections = document.querySelectorAll("section")
for(const section of sections){
    section.style.border = "4px solid orange";
    section.style.marginBottom = "16px";
    section.style.borderRadius = "16px";
    section.style.paddingLeft = "16px";
    section.style.backgroundColor = "lightGray"
}

const frutes = document.getElementById("frutes-continer")
frutes.style.textAlign = "center"

const web = document.getElementById("web-devlpo")
web.classList.add('dom-section')

const web2 = document.getElementById("web-devlpo")
web2.classList.add("text-size")
