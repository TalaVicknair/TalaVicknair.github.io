// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
//     alert(phone_content.value);
// }

function check() {
    console.log('clicked button');
}

function submit() {
    alert(output.textContent);
}

function up() {
    if (outputInt < 9999999999) {
    outputInt += 1;
    output.textContent = outputInt; }
}

function down() {
    if (outputInt > 0) {
    outputInt -= 1;
    output.textContent = outputInt; }
}

function reset() {
    outputInt = 1000000000;
    output.textContent = outputInt;
}

function random() {
    outputInt = randomNumber(1000000000,9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function slide() {

}

const downbtn = document.querySelector('.down-button').addEventListener('click', down);
const upbtn = document.querySelector('.up-button').addEventListener('click', up);
const resetbtn = document.querySelector('.reset-button').addEventListener('click', reset);
const submitbtn = document.querySelector('.submit-button').addEventListener('click', submit);
const randombtn = document.querySelector('.random-button').addEventListener('click', random);
const sliderbtn = document.querySelector('.slider-button').addEventListener('click', slide);

var slider = document.getElementById("myRange");
var sliderOutput = document.querySelector(".slider-output");
var sliderSubmit = document.querySelector(".slider-button").addEventListener('click', update);

sliderOutput.oninput = function() {
    sliderOutput.innerHTML = slider.value;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
