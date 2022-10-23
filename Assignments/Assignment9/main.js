const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/pic1.png", "images/pic2.png", "images/pic3.png", "images/pic4.png", "images/pic5.png"];
const alts = ["an eye", "waves", "flowers", "egyptian art", "moth"];

/* Declaring the alternative text for each image file */

/* Looping through images */
let i = 0;

while (i < images.length) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    function setDisplayImg () {
        displayedImage.setAttribute('src', newImage.src);
        displayedImage.setAttribute('alt', newImage.alt);
    }
    newImage.addEventListener('click', setDisplayImg);
    i++;
}

function btnChange () {
    let btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        console.log(btnClass);
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    else if (btnClass === 'light') {
        console.log(btnClass);
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

btn.addEventListener('click', btnChange);