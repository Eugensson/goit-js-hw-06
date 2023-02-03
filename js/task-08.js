const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== "" && password.value !== "") {
    console.log(
      `Login: ${event.currentTarget.elements.email.value}, Password: ${event.currentTarget.elements.password.value}`
    );
    event.currentTarget.reset();
    return;
  }
  alert("All fields must be filled!!!");
}
