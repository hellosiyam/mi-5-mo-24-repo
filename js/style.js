const sections = document.querySelectorAll("section")
for(const section of sections){
    section.style.border = "4px solid orange";
    section.style.marginBottom = "16px";
    section.style.borderRadius = "16px";
    section.style.paddingLeft = "16px";
    section.style.backgroundColor = "lightGray"
}
const div=document.querySelector('div')
div.classList.add('divStyle')

// const frutes = document.getElementById("frutes-continer")
// frutes.style.textAlign = "center"

const web = document.querySelector("section")
web.classList.add('customCss')

const web2 = document.getElementById("customId")
web2.classList.add("text-size")
web2.classList.add('customCss')


