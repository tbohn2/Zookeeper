function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form_message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");
  const homePageForm = document.querySelector("#homePage");
}

  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
  });

  loginForm.addEventListener("submit", e => {
    e.preventDefault();


document.querySelectorAll(".form__input").forEach(inputElement => {
  inputElement.addEventListener("blur", e => {
    if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 8) {
      setInputError(inputElement, "Username must be at least 8 characters in length");
    }
  });
inputElement.addEventListener("input", e => {
  clearInputError(inputElement);
    });
  });
});