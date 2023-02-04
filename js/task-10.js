const outputEl = document.querySelector("#boxes");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const quantityEl = document.querySelector('#controls>input[type="number"]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  amount = Number(quantityEl.value);
  const boxesMarkup = new Array(amount)
    .fill("")
    .reduce((resultString, element, i) => {
      return (resultString += `<div style = "width: ${30 + i * 10}px; height: ${
        30 + i * 10
      }px; background-color: ${getRandomHexColor()}"></div>`);
    }, "");
  outputEl.innerHTML = "";
  outputEl.insertAdjacentHTML("beforeend", boxesMarkup);
  quantityEl.value = "";
};

const removeBoxes = () => {
  outputEl.innerHTML = "";
  quantityEl.value = "";
};

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", removeBoxes);
