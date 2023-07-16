const categoriesList = document.querySelector("#categories");
const itemsList = categoriesList.querySelectorAll(".item");
const categoriesQuantity = itemsList.length;
console.log("Number of categories: ", categoriesQuantity);

itemsList.forEach(item => {
    const categoriesTitle = item.querySelector("h2").textContent;    
    const categoriesElements = item.querySelectorAll("li").length;
    console.log("Category: ", categoriesTitle);
    console.log("Elements: ", categoriesElements);
});