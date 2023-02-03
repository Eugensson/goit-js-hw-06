const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { login, password },
  } = event.currentTarget;

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("All fields must be filled!!!");
  } else if (
    event.currentTarget.elements.email.value !== "" &&
    event.currentTarget.elements.password.value !== ""
  ) {
    console.log(
      `Login: ${event.currentTarget.elements.email.value}, Password: ${event.currentTarget.elements.password.value}`
    );
  }

  event.currentTarget.reset();
}
