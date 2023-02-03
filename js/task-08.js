const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  if (
    event.currentTarget.elements.email.value !== "" &&
    event.currentTarget.elements.password.value !== ""
  ) {
    return formData.forEach((value, name) => {
      console.log("Name:", name);
      console.log("Value:", value);
      form.reset();
    });
  }
  alert("All fields must be filled!!!");
}
