const counter = document.getElementById("count");
const incBtn = document.getElementById("inc-btn");
const ResetBtn = document.getElementById("reset-btn");
const decBtn = document.getElementById("dec-btn");
let count = 0;

incBtn.onclick = function () {
    count++;
    counter.textContent = count;
}
ResetBtn.onclick = function () {
    count = 0;
    counter.textContent = count;
}
decBtn.onclick = function () {
    count--;
    counter.textContent = count;
}