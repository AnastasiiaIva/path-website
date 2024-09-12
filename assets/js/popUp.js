document.addEventListener("DOMContentLoaded", function () {
  // Tabs switching
  const registerTab = document.getElementById("register-tab");
  const loginTab = document.getElementById("login-tab");
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

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

  // Email validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const emailStatus = document.getElementById("email-status");

  emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value;
    if (emailValue === "") {
      emailInput.style.borderColor = "";
      emailStatus.innerHTML = "";
      emailError.textContent = "";
    } else if (validateEmail(emailValue)) {
      emailInput.style.borderColor = "green";
      emailStatus.innerHTML = "✔"; // Set green checkmark
      emailStatus.style.color = "green";
      emailError.textContent = ""; // Clear error message
    } else {
      emailInput.style.borderColor = "red";
      emailStatus.innerHTML = "✖"; // Set red cross
      emailStatus.style.color = "red";
      emailError.textContent = "Invalid email address.";
    }
  });

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Password toggle visibility

  const passwordInput = document.getElementById("password");
  const togglePasswordBtn = document.getElementById("toggle-password");
  togglePasswordBtn.addEventListener("click", function () {
    const passwordFieldType = passwordInput.getAttribute("type");
    if (passwordFieldType === "password") {
      passwordInput.setAttribute("type", "text");
      togglePasswordBtn.textContent = "🙊"; // Change icon to hide
    } else {
      passwordInput.setAttribute("type", "password");
      togglePasswordBtn.textContent = "🙈"; // Change icon to show
    }
  });

  // Password validation
  const passwordError = document.getElementById("password-error");
  const passwordStatus = document.getElementById("password-status");

  passwordInput.addEventListener("input", function () {
    const passwordValue = passwordInput.value;
    if (passwordValue === "") {
      passwordInput.style.borderColor = "";
      passwordStatus.innerHTML = "";
      passwordError.textContent = "";
    } else if (validatePassword(passwordValue)) {
      passwordInput.style.borderColor = "green";
      passwordStatus.innerHTML = "✔"; // Set green checkmark
      passwordStatus.style.color = "green";
      passwordError.textContent = ""; // Clear error message
    } else {
      passwordInput.style.borderColor = "red";
      passwordStatus.innerHTML = "✖"; // Set red cross
      passwordStatus.style.color = "red";
      passwordError.textContent = "Password must be 8+ characters long.";
    }
  });

  // Password validation function
  function validatePassword(password) {
    return password.length >= 8;
  }
});
