const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const showPasswordButton = document.getElementById("showPassword");
const formStatus = document.getElementById("formStatus");

showPasswordButton.addEventListener("click", () => {
  const shouldShow = passwordInput.type === "password";
  passwordInput.type = shouldShow ? "text" : "password";
  showPasswordButton.textContent = shouldShow ? "Hide" : "Show";
  showPasswordButton.setAttribute("aria-pressed", String(shouldShow));
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;

  formStatus.textContent = "Logging in...";
  const submitButton = loginForm.querySelector(".submit-button");
  submitButton.disabled = true;

  window.setTimeout(() => {
    formStatus.textContent = "Demo login complete — connect your authentication API.";
    submitButton.disabled = false;
  }, 650);
});

loginForm.addEventListener("input", () => {
  formStatus.textContent = "";
});

document.querySelectorAll("[data-message]").forEach((button) => {
  button.addEventListener("click", () => {
    formStatus.textContent = button.dataset.message;
  });
});
