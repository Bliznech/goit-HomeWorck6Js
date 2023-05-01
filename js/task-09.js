function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector("button.change-color");
const bodyColor = document.querySelector("body");
const valueColor = document.querySelector("span.color");
btn.addEventListener("click", (a) => {
  let colorBody = getRandomHexColor();
  bodyColor.style.backgroundColor = colorBody;
  valueColor.textContent = colorBody;
});
