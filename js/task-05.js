const inputName = document.getElementById('name-input');
const outputName = document.getElementById("name-output");
function changeOutput() {
    if (inputName.value.trim() !== "") {
        outputName.textContent = inputName.value;
    } else {
        outputName.textContent = "Anonymous";
    }
}
inputName.addEventListener("input", changeOutput);