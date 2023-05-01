const counter = {
  counterValue: 0,
  decrement() {
    this.counterValue -= 1;
  },
  increment() {
    this.counterValue += 1;
  },
};
const newValue = document.querySelector("#value");
console.log(newValue);
const buttonDec = document.querySelector('button[data-action = "decrement"]');
console.log(buttonDec);
const buttonInc = document.querySelector('button[data-action="increment"]');
console.log(buttonInc);
buttonDec.addEventListener("click", function () {
  counter.decrement();
  newValue.textContent = counter.counterValue;
});
buttonInc.addEventListener("click", function () {
  counter.increment();
  newValue.textContent = counter.counterValue;
});
