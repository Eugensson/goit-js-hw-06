const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// З використанням For

// const listOfIngredientsEl = document.querySelector("ul#ingredients");
// let list = [];
// for (const ingredient of ingredients) {
//   const itemOfIngredientsEl = document.createElement("li");
//   itemOfIngredientsEl.textContent = ingredient;
//   itemOfIngredientsEl.classList.add("item");
//   list.push(itemOfIngredientsEl);
// }
// listOfIngredientsEl.append(...list);
// console.log(listOfIngredientsEl);

// З використанням map

// const listOfIngredientsEl = document.querySelector("#ingredients");
// const list = ingredients.map((ingredient) => {
//   const itemOfIngredientsEl = document.createElement("li");
//   itemOfIngredientsEl.textContent = ingredient;
//   itemOfIngredientsEl.classList.add("item");
//   return itemOfIngredientsEl;
// });
// listOfIngredientsEl.append(...list);

// console.log(listOfIngredientsEl);

const listOfIngredientsEl = document.querySelector("#ingredients");
const makeListOfIngredients = (ingredient) => {
  return ingredient.map((ingredient) => {
    const itemOfIngredientsEl = document.createElement("li");
    itemOfIngredientsEl.textContent = ingredient;
    itemOfIngredientsEl.classList.add("item");

    return itemOfIngredientsEl;
  });
};

const list = makeListOfIngredients(ingredients);
listOfIngredientsEl.append(...list);
// console.log(listOfIngredientsEl);
