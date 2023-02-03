const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const quantityEl = document.querySelector('#controls>input[type="number"]');
const outputEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 0; i < quantityEl.value; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = 30 + i * 10 + "px";
    boxEl.style.height = 30 + i * 10 + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesArr.push(boxEl);
  }
  outputEl.append(...boxesArr);
}

function destroyBoxes() {
  outputEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
