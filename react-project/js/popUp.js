/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", function () {
  const registerTab = document.getElementById("register-tab");
  const loginTab = document.getElementById("login-tab");
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

  // Switch between login and register tabs
  registerTab.addEventListener("click", function () {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    loginTab.classList.remove("active");
    registerTab.classList.add("active");
  });

  loginTab.addEventListener("click", function () {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    registerTab.classList.remove("active");
    loginTab.classList.add("active");
  });

  // Switch to register form when clicking "Create an account"
  const registerLink = document.getElementById("register-link");
  registerLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    loginTab.classList.remove("active");
    registerTab.classList.add("active");
  });

  // Switch to login form when clicking "Log in" from register page
  const loginLink = document.getElementById("login-link");
  loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    registerTab.classList.remove("active");
    loginTab.classList.add("active");
  });

  // Password toggle visibility for login form
  const passwordInput = document.getElementById("password");
  const togglePasswordBtn = document.getElementById("toggle-password");
  togglePasswordBtn.addEventListener("click", function () {
    const passwordFieldType = passwordInput.getAttribute("type");
    if (passwordFieldType === "password") {
      passwordInput.setAttribute("type", "text");
      togglePasswordBtn.textContent = "🙊";
    } else {
      passwordInput.setAttribute("type", "password");
      togglePasswordBtn.textContent = "🙈";
    }
  });

  // Password toggle visibility for register form
  const registerPasswordInput = document.getElementById("register-password");
  const toggleRegisterPasswordBtn = document.getElementById(
    "toggle-register-password"
  );
  toggleRegisterPasswordBtn.addEventListener("click", function () {
    const passwordFieldType = registerPasswordInput.getAttribute("type");
    if (passwordFieldType === "password") {
      registerPasswordInput.setAttribute("type", "text");
      toggleRegisterPasswordBtn.textContent = "🙊";
    } else {
      registerPasswordInput.setAttribute("type", "password");
      toggleRegisterPasswordBtn.textContent = "🙈";
    }
  });

  // Email validation for login form
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const emailStatus = document.getElementById("email-status");

  emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value;
    if (validateEmail(emailValue)) {
      emailInput.style.borderColor = "green";
      emailStatus.innerHTML = "✔";
      emailStatus.style.color = "green";
      emailError.textContent = "";
    } else {
      emailInput.style.borderColor = "red";
      emailStatus.innerHTML = "✖";
      emailStatus.style.color = "red";
      emailError.textContent = "Invalid email address.";
    }
  });

  // Email validation for register form
  const registerEmailInput = document.getElementById("register-email");
  const registerEmailError = document.getElementById("register-email-error");
  const registerEmailStatus = document.getElementById("register-email-status");

  registerEmailInput.addEventListener("input", function () {
    const emailValue = registerEmailInput.value;
    if (validateEmail(emailValue)) {
      registerEmailInput.style.borderColor = "green";
      registerEmailStatus.innerHTML = "✔";
      registerEmailStatus.style.color = "green";
      registerEmailError.textContent = "";
    } else {
      registerEmailInput.style.borderColor = "red";
      registerEmailStatus.innerHTML = "✖";
      registerEmailStatus.style.color = "red";
      registerEmailError.textContent = "Invalid email address.";
    }
  });
  // Password confirmation validation
  const confirmPasswordInput = document.getElementById("confirm-password");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );
  const confirmPasswordStatus = document.getElementById(
    "confirm-password-status"
  );

  confirmPasswordInput.addEventListener("input", function () {
    const confirmPasswordValue = confirmPasswordInput.value;
    const registerPasswordValue = registerPasswordInput.value;

    if (confirmPasswordValue === "") {
      confirmPasswordInput.style.borderColor = "";
      confirmPasswordStatus.innerHTML = "";
      confirmPasswordError.textContent = "";
    } else if (confirmPasswordValue === registerPasswordValue) {
      confirmPasswordInput.style.borderColor = "green";
      confirmPasswordStatus.innerHTML = "✔"; // Set green checkmark
      confirmPasswordStatus.style.color = "green";
      confirmPasswordError.textContent = ""; // Clear error message
    } else {
      confirmPasswordInput.style.borderColor = "red";
      confirmPasswordStatus.innerHTML = "✖"; // Set red cross
      confirmPasswordStatus.style.color = "red";
      confirmPasswordError.textContent = "Passwords do not match.";
    }
  });
});

// // Password confirmation validation
// const confirmPasswordInput = document.getElementById("confirm-password");
// const confirmPasswordError = document.getElementById(
//   "confirm-password-error"
// );
// const confirmPasswordStatus = document.getElementById(
//   "confirm-password-status"
// );

// confirmPasswordInput.addEventListener("input", function () {
//   const confirmPasswordValue = confirmPasswordInput.value;
//   const registerPasswordValue = registerPasswordInput.value;

//   if (confirmPasswordValue === "") {
//     confirmPasswordInput.style.borderColor = "";
//     confirmPasswordStatus.innerHTML = "";
//     confirmPasswordError.textContent = "";
//   } else if (confirmPasswordValue === registerPasswordValue) {
//     confirmPasswordInput.style.borderColor = "green";
//     confirmPasswordStatus.innerHTML = "✔";
//     confirmPasswordStatus.style.color = "green";
//     confirmPasswordError.textContent = "";
//   } else {
//     confirmPasswordInput.style.borderColor = "red";
//     confirmPasswordStatus.innerHTML = "✖";
//     confirmPasswordStatus.style.color = "red";
//     confirmPasswordError.textContent = "Passwords do not match.";
//   }
// });

// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(String(email).toLowerCase());
// }
// });
