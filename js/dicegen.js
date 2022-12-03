window.onload = randomAll;

const baseColorbtn = document.querySelector(".bc");
baseColorbtn.addEventListener("click", writeBaseClr);

const extraColorbtn = document.querySelector(".ec");
extraColorbtn.addEventListener("click", writeExtraClr);

const texturebtn = document.querySelector(".txtr");
texturebtn.addEventListener("click", writeTexture);

const shinebtn = document.querySelector(".shn");
shinebtn.addEventListener("click", writeShine);

const inclusionsbtn = document.querySelector(".icl");
inclusionsbtn.addEventListener("click", writeInclusions);

const techniquebtn = document.querySelector(".tcn");
techniquebtn.addEventListener("click", writeTechnique);

const inkColorbtn = document.querySelector(".ic");
inkColorbtn.addEventListener("click", writeInkClr);

const d4btn = document.querySelector(".d4");
d4btn.addEventListener("click", writeD4);

const clearbtn = document.querySelector(".clr");
clearbtn.addEventListener("click", clear);

const randombtn = document.querySelector(".rnd");
randombtn.addEventListener("click", randomAll);

const baseColor = ["Clear","Red","Orange","Yellow","Green","Blue","Purple","Pink","Gold","Silver","Black","White"];
const extraColor = ["None","Red","Orange","Yellow","Green","Blue","Purple","Pink","Gold","Silver","Black","White"];
const texture = ["Glitter","Pearlescent","Translucent","Opaque"];
const shine = ["Matte","Shiny"];
const inclusions = ["None","Fruit","Cards","Glitter","Holographic Paper","Flowers", "Mica Powder"];
const technique = ["None","Petri","Swirl","Marble","Clouds"];
const inkColor = ["Red","Orange","Yellow","Green","Blue","Purple","Pink","Gold","Silver","Black","White"];
const d4Shape = ["Pyramid","Pendant","Gem"];

function randomAll() {
    writeBaseClr();
    writeExtraClr();
    writeTexture();
    writeShine();
    writeInclusions();
    writeTechnique();
    writeInkClr();
    writeD4();
}

function writeBaseClr() {
    var randbc = baseColor[Math.floor(Math.random() * baseColor.length)];
    document.getElementById("bct").innerHTML=randbc;
};

function writeExtraClr() {
    var randec = extraColor[Math.floor(Math.random() * extraColor.length)];
    document.getElementById("ect").innerHTML=randec;
};

function writeTexture() {
    var randtxtr = texture[Math.floor(Math.random() * texture.length)];
    document.getElementById("txtrt").innerHTML=randtxtr;
};

function writeShine() {
    var randshn = shine[Math.floor(Math.random() * shine.length)];
    document.getElementById("shnt").innerHTML=randshn;
};

function writeInclusions() {
    var randicl = inclusions[Math.floor(Math.random() * inclusions.length)];
    document.getElementById("iclt").innerHTML=randicl;
};

function writeTechnique() {
    var randtcn = technique[Math.floor(Math.random() * technique.length)];
    document.getElementById("tcnt").innerHTML=randtcn;
};

function writeInkClr() {
    var randic = inkColor[Math.floor(Math.random() * inkColor.length)];
    document.getElementById("ict").innerHTML=randic;
};

function writeD4() {
    var randd4 = d4Shape[Math.floor(Math.random() * d4Shape.length)];
    document.getElementById("d4t").innerHTML=randd4;
};

function clear() {
    document.getElementById("bct").innerHTML="";
    document.getElementById("ect").innerHTML="";
    document.getElementById("txtrt").innerHTML="";
    document.getElementById("shnt").innerHTML="";
    document.getElementById("iclt").innerHTML="";
    document.getElementById("tcnt").innerHTML="";
    document.getElementById("d4t").innerHTML="";
    document.getElementById("ict").innerHTML="";
};