const textOut = document.querySelector("#name-output");
const textIn = document.querySelector("#name-input");
textIn.addEventListener("input", (event) => {
  textOut.textContent = event.target.value;
  if (event.target.value === "") {
    textOut.textContent = "Anonymous";
  }
});
