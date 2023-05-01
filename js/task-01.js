const totalCategory = document.querySelectorAll(".item");
console.log(`Number of categories:${totalCategory.length}`);
const categorArray = [...totalCategory].forEach((a) => {
  console.log(`Category: ${a.children[0].textContent}
    Elements: ${a.children[1].children.length}`);
});
