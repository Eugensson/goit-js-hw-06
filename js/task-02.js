const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredientsEl = document.querySelector("#ingredients");

const makeListOfIngredients = (ingredient) => {
  return ingredient.map((ingredient) => {
    const itemOfIngredientsEl = document.createElement("li");
    itemOfIngredientsEl.textContent = ingredient;
    itemOfIngredientsEl.classList.add("item");
    return itemOfIngredientsEl;
  });
};

listOfIngredientsEl.append(...makeListOfIngredients(ingredients));
