const itemsList = document.querySelectorAll(".item");
const categoriesQuantity = itemsList.length;
console.log("Number of categories: ", categoriesQuantity);

itemsList.forEach(item => {
  const categoriesTitle = item.firstElementChild.textContent;
  const categoriesItems = item.lastElementChild.children.length;

  console.log(`Category: ${categoriesTitle}`);
  console.log(`Elements: ${categoriesItems}`);
});