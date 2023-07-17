const fontSizeControl = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

fontSizeControl.addEventListener("input", fontSize);
function fontSize(e) {
    const fontSize = e.target.value;
    spanText.style.fontSize = fontSize + `px`;
};