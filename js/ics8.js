let article = document.querySelector('article');
article.addEventListener('click', changeImage);

function changeImage() { 
    document.getElementById("imgClickAndChange").src="Assignments/ica8/crying.gif";
}

function changeText() {
    document.getElementById("header").innerHTML = "Scump";
}



const header = document.getElementById("header");
header.addEventListener('click', scump);
function scump() {
    header.textContent = "Scump";
}