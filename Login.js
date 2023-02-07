const loginBtn = document.getElementById("login-btn");
const formContainer = document.querySelector(".form-container");
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const dobInput = document.getElementById("dob");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const emailError = document.getElementById("email-error");
const dobError = document.getElementById("dob-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const successMessage = document.getElementById("success-message");
const fnameInput = document.getElementById("first-name");
const fnameError = document.getElementById("fname-error");
const lnameInput = document.getElementById("last-name");
const lnameError = document.getElementById("lname-name");
// loginBtn.addEventListener("click", function() {
//   formContainer.style.display = "block";
// });

const validateForm = () => {
  emailInput.addEventListener("blur", function () {
    const regex = "^/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/";
    if (!regex.test(emailInput.value)) {
      emailError.innerHTML = "Please enter a valid email address";
      emailInput.style.border = "1px solid red";
    } else {
      emailError.innerHTML = "";
      emailInput.style.border = "1px solid #ccc";
    }
  });
  dobInput.addEventListener("blur", function () {
    const today = new Date();
    const dob = new Date(dobInput.value);
    const age = today.getFullYear() - dob.getFullYear();
    if (age < 18) {
      dobError.innerHTML = "Age must be above 18 years";
      dobInput.style.border = "1px solid red";
    } else {
      dobError.innerHTML = "";
      dobInput.style.border = "1px solid #ccc";
    }
  });

  passwordInput.addEventListener("blur", function () {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!regex.test(passwordInput.value)) {
      passwordError.innerHTML =
        "Password must be 8 characters long with 1 upper case and 1 symbol";
      passwordInput.style.border = "1px solid red";
    } else {
      passwordError.innerHTML = "";
      passwordInput.style.border = "1px solid #ccc";
    }
  });

  confirmPasswordInput.addEventListener("blur", function () {
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.innerHTML = "Passwords do not match";
      confirmPasswordInput.style.border = "1px solid red";
    } else {
      confirmPasswordError.innerHTML = "";
      confirmPasswordInput.style.border = "1px solid #ccc";
    }
  });

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (
      !emailInput.value ||
      !dobInput.value ||
      !passwordInput.value ||
      !confirmPasswordInput.value
    ) {
      alert("Please fill in all the fields");
      return;
    }
    if (
      emailError.innerHTML ||
      dobError.innerHTML ||
      passwordError.innerHTML ||
      confirmPasswordError.innerHTML
    ) {
      alert("Please correct the errors");
      return;
    }
    const email = emailInput.value;
    const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    if (storedEmails.indexOf(email) !== -1) {
      alert("You are already registered");
      return;
    }
    storedEmails.push(email);
    localStorage.setItem("emails", JSON.stringify(storedEmails));
    alert("Sign up successful");
  });
};
// Show sign up form on login button click
const showSignupForm = () => {
  const loginButton = document.getElementById("login-btn");
  const signupForm = document.getElementById("signup-form");
};

// Initialize the page
const init = () => {
  validateForm();
  showSignupForm();
};

init();
