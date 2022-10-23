const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
const alts = ["an eye", "waves", "flowers", "egyptian art", "moth"];

/* Declaring the alternative text for each image file */

/* Looping through images */
let i = 0;

while (i < images.length) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    function setDisplayImg (src,alt,img) {
        img.setAttribute('src', src);
        img.setAttribute('alt', alt);
    };
    displayedImage.addEventListener('click', setDisplayImg);
    i++;
}



/* Wiring up the Darken/Lighten button */
btn.getAttribute('class');

function darkLight (class) {
    if (btn.class == "dark") {
        btn.setAttribute('class', 'light');
    }
}