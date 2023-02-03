const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  textInput;
  if (textInput.value === "") {
    return (textOutput.textContent = "Anonymous");
  }
  textOutput.textContent = event.currentTarget.value.trim();
  console.log(textOutput);
});
