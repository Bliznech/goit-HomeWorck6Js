const input = document.getElementById("font-size-control");
const textSize = document.getElementById("text");
input.addEventListener("input", SizeText);
function SizeText(event) {
  textSize.style.fontSize = event.currentTarget.value + "px";
}
