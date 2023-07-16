const decreseBtn = document.querySelector('[data-action="decrement"]');
const increseBtn = document.querySelector('[data-action="increment"]');
const counterValueEl = document.getElementById('value');
let counterValue = 0;
function changeCounterValue() {
    counterValueEl.textContent = counterValue;
}
decreseBtn.addEventListener('click', function () {
    counterValue--;
    changeCounterValue();
});
increseBtn.addEventListener('click', function () {
    counterValue++;
    changeCounterValue();
});
changeCounterValue();