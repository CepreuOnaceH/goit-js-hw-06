const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", onBlur);

function onBlur(e) {
    const length = e.target.value.length;
    const requiredLength = validationInput.dataset.length;
    if (length === parseInt(requiredLength)) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
}
