const changeColorButton = document.querySelector(".change-color");
const changeColorVidget = document.querySelector(".color");
const bodyColor = document.body;
changeColorButton.addEventListener("click", changeColor)
function changeColor() {
  let randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  changeColorVidget.textContent = randomColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
