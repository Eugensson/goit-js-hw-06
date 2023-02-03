const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listOfGallaryEl = document.querySelector(".gallery");
const list = images.map(({ url, alt }) => {
  return listOfGallaryEl.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item"><img src="${url}" alt="${alt}" width="300"></li>`
  );
});

console.log(listOfGallaryEl);

// Приклад дз № 2
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const listOfIngredientsEl = document.querySelector("#ingredients");

// const makeListOfIngredients = (ingredient) => {
//   return ingredient.map((ingredient) => {
//     const itemOfIngredientsEl = document.createElement("li");
//     itemOfIngredientsEl.textContent = ingredient;
//     itemOfIngredientsEl.classList.add("item");
//     return itemOfIngredientsEl;
//   });
// };

// listOfIngredientsEl.append(...makeListOfIngredients(ingredients));
