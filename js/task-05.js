const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", onTypingInInput);

function onTypingInInput(e) {
  nameOutput.textContent = e.currentTarget.value.trim();

  if (!nameOutput.textContent) {
    nameOutput.textContent = "Anonymous";
  }
}
