const divControls = document.getElementById("controls");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");  
const divBox = document.getElementById("boxes");

createButton.addEventListener("click", function () {
  const amount = document.querySelector("input").value;
  createBoxes(amount);
})
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxSize = 30;
  let boxesHTML = "";
  for (let i = 0; i < amount; i+=1) {
    let size = boxSize + i * 10;
    let color = getRandomHexColor();
    let box = `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
    boxesHTML += box;
  }
  divBox.innerHTML = boxesHTML;
}
function destroyBoxes() {
  divBox.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
