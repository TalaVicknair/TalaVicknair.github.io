// window.addEventListener('load', randomAll);

const baseColorbtn = document.querySelector("bc");
baseColorbtn.addEventListener("click", writeBaseClr);

const baseColor = ["Clear","Red","Orange","Yellow","Green","Blue","Purple","Pink","Gold","Silver","Black","White"];
const extraColor = ["None","Red","Orange","Yellow","Green","Blue","Purple","Pink","Gold","Silver","Black","White"];
const texture = ["Glitter","Pearlescent","Translucent","Opaque"];
const shine = ["Matte","Shiny"];
const inclusions = ["None","Fruit","Cards","Glitter","Holographic Paper","Flowers"];
const technique = ["None","Petri","Swirl","Marble","Clouds"];
const inkColor = ["Red","Orange","Yellow","Green","Blue","Purple","Pink","Gold","Silver","Black","White"];
const d4Shape = ["Pyramid","Pendant","Gem"];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

function writeBaseClr() {
    displaybaseColor(baseColor(getRandomIntInclusive(1, 12)));
};

function displaybaseColor(x) {
    document.getElementById("baseColortxt").textContent = x;
};