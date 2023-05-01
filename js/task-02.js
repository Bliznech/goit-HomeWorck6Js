const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let idSelector = "#ingredients";
function newList(array) {
  const list = document.querySelector(idSelector);
  const newLi = [];
  array.forEach((ingridient) => {
    const items = document.createElement("li");
    items.className = "item";
    items.textContent = ingridient;
    newLi.push(items);
    console.log(items);
  });
  list.append(...newLi);
}
newList(ingredients);
