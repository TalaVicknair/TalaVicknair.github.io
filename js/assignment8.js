const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "Days turned into weeks. Weeks turned into months. Hot days up to 94 fahrenheit had kept them away. :insertx: found themself waking up every day to the obscenity that was :inserty:. All they had for companionship was a 300 pound Samsung Smart Fridge they could play tic tac toe on. There was never reason to leave; in fact they couldn't. Ever since :insertz:, :insertx: had never been the same. Perhaps one day they could find the will or want to leave. Even the powerful wizard Steve Buscemi could not aid them. But for now, months turned into years.";

let insertX = ["Jack Black Bowser", "Marina Splatoon", "Sans Undertale"];
let insertY = ["an abandoned train","a decrepid shell of a city","the still operating refrigerator of a bad Italian restaurant"];
let insertZ = ["Chris Pratt voiced Mario","a famous actor exploded live during the Oscars","everyone turned into snails, and it was really cool"];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    storyText = storyText.replace("Steve Buscemi",name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature =  Math.round((94 - 32) * 5/9) + ' centigrade';
    storyText = storyText.replace("94 fahrenheit", temperature);
    storyText = storyText.replace("300 pound", weight);
  }

  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:",xItem);
  newStory = newStory.replace(":inserty:",yItem);
  newStory = newStory.replace(":insertz:",zItem);
  newStory = newStory.replace(":insertx:",xItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}