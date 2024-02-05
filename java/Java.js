const noButton = document.getElementById("noBtn");
const yesButton = document.getElementById("yesBtn");
const questionStr = document.getElementById("question");
const gifBear = document.getElementById("gifs");
const myList = ["Sure?", "Are you really sure??", "Please?", "Pretty please?", "I will be sad", "I will be really sad", "Come on!"];
let yesWidth = 250;
let yesHeight = 115;
let yesPadding = 20;
let size= 50
let padding = 25

function noBtnClickEvent(obj) {
  let randomNum = Math.floor(Math.random() * myList.length);

  if (obj.innerHTML == "No" || myList.includes(obj.innerHTML)) {
    obj.innerHTML = myList[randomNum];
    yesButton.style.width = String(yesWidth + size) + "px"
    yesButton.style.height = String(yesHeight + size) + "px"
    yesButton.style.paddingTop = String(yesPadding + padding) + "px"
    console.log( yesButton.style.width,yesButton.style.height,yesButton.style.paddingTop)
  }
  size = size + 50
  padding = padding + 25
}

function yesBtnClickEvent() {
  gifBear.src = "bear-kiss-bear-kisses.gif";
  yesButton.style.width = String(yesWidth) + "px"
  yesButton.style.height = String(yesHeight) + "px"
  yesButton.style.paddingTop = String(yesPadding) + "px"
  questionStr.innerHTML = "Ok Yaaaay !!!";
  noButton.innerHTML = "I knew it !";
}
