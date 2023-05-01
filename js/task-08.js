const option = document.querySelector(".login-form");
option.addEventListener("submit", handSubmit);
function handSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please enter email and password");
  }
  const Detalis = { email: email.value, password: password.value };
  console.log(Detalis);
  event.currentTarget.reset();
}
