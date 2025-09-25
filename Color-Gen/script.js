const btn = document.getElementById("btn");
const colorText = document.getElementById("color");

function getRandomColor() {
    const num = Math.floor(Math.random() * 16777215).toString(16);
    const hex = "#" + num.padStart(6, "0");
    return hex;
}
btn.addEventListener("click", () => {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    colorText.textContent = color;
});