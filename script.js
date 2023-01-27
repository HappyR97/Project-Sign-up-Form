const passwordEl = document.getElementById("password");
const passwordConfirmEl = document.getElementById("confirm-password");
const btnSubmit = document.querySelector("button[type='submit']");

btnSubmit.addEventListener("click", function (event) {
  if (passwordEl.value !== passwordConfirmEl.value) {
    event.preventDefault();
    alert("Passwords do not match");
  }
});
