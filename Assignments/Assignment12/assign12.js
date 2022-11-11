window.addEventListener('load', reload);

const btn0 = document.querySelector('.zero-btn').addEventListener('click', click);
const btn1 = document.querySelector('.one-btn').addEventListener('click', click);
const btn2 = document.querySelector('.two-btn').addEventListener('click', click);
const btn3 = document.querySelector('.three-btn').addEventListener('click', click);
const btn4 = document.querySelector('.four-btn').addEventListener('click', click);
const btn5 = document.querySelector('.five-btn').addEventListener('click', click);
const btn6 = document.querySelector('.six-btn').addEventListener('click', click);
const btn7 = document.querySelector('.seven-btn').addEventListener('click', click);
const btn8 = document.querySelector('.eight-btn').addEventListener('click', click);
const btn9 = document.querySelector('.nine-btn').addEventListener('click', click);
const submitbtn = document.querySelector('.submit-btn').addEventListener('click', submit);

nums = [0,1,2,3,4,5,6,7,8,9];
const input = document.getElementById('yourInput');

function reload() {
    input.value = "";
}

function click() {
    var randomItem = nums[Math.floor(Math.random()*nums.length)];
    if (input.value < 999999999) {
        input.value += randomItem;
    }
}
function submit() {
    let output = input.value;
    console.log(output);
    if (output === "") {
        alert("Please enter a phone number.");
    }
    else if (output <= 99999999) {
        alert("Please enter your full phone number");
    }
    else {
        let alertText = (`Your phone number is ${output}`);
        alert(alertText);
    }
}