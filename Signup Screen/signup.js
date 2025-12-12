document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signupForm");
  const termsCheckbox = document.querySelector("#terms");
  const signupBtn = document.querySelector("#submitBtn");
  const passwordInput = document.querySelector("#password");
  const eyeIcon = document.querySelector("#eyeicon");
  const fullname = document.querySelector("#fullname");
  const email = document.querySelector("#email");

  if (eyeIcon && passwordInput) {
    eyeIcon.addEventListener("click", function () {
      const currentType = passwordInput.getAttribute("type");
      if (currentType === "password") {
        // Password is currently HIDDEN, so we're going to SHOW it
        passwordInput.setAttribute("type", "text");
        eyeIcon.src = "./eye-open.png"; // Show OPEN eye because password is now VISIBLE
        eyeIcon.alt = "Hide password";
      } else {
        // Password is currently VISIBLE, so we're going to HIDE it
        passwordInput.setAttribute("type", "password");
        eyeIcon.src = "./eye-close.png"; // Show CLOSED eye because password is now HIDDEN
        eyeIcon.alt = "Show password";
      }
    });
  }

  // Button state toggle function (check T&C)
  function toggleButtonState() {
    if (termsCheckbox.checked) {
      signupBtn.classList.add("is-active");
      signupBtn.disabled = false;
    } else {
      signupBtn.classList.remove("is-active");
      signupBtn.disabled = true;
    }
  }

  termsCheckbox.addEventListener("change", toggleButtonState);

  // Form validation
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;
      let errorMessage = "";

      // Reset border colors
      fullname.classList.remove("error-border");
      email.classList.remove("error-border");
      passwordInput.classList.remove("error-border");

      // Check Full Name
      if (fullname.value.trim() === "") {
        isValid = false;
        errorMessage += "- Please enter your full name.\n";
        fullname.classList.add("error-border");
      }

      // Check Email
      if (email.value.trim() === "" || !email.value.includes("@")) {
        isValid = false;
        errorMessage += "- Please enter a valid email address.\n";
        email.classList.add("error-border");
      }

      // Check Password
      if (passwordInput.value.trim() === "") {
        isValid = false;
        errorMessage += "- Please enter a password.\n";
        passwordInput.classList.add("error-border");
      }

      // Check Terms & Conditions
      if (!termsCheckbox.checked) {
        isValid = false;
        errorMessage += "- You must agree to the Terms & Conditions.\n";
      }

      if (isValid) {
        // Redirect to confirmation page
        window.location.href =
          "../Accountcreationcomfirmation/Accountcreationcomfirmation.html";
      } else {
        alert("Please fix the following errors:\n" + errorMessage);
      }
    });
  }

  // Clear error styling on input
  [fullname, email, passwordInput].forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("error-border");
    });
  });
});

// when the sigin is been clicked
document.addEventListener("DOMContentLoaded", function () {
  const sigIn = document.getElementById("sign-in");
  if (sigIn) {
    sigIn.addEventListener("click", function () {
      console.log("Get Started button clicked! Navigating to Sign In page...");

      window.location.href = "../LogIn-screen/logIn.html";

      // alert("Proceeding to the next screen (Sign login).");
    });
  } else {
    console.error('Error:Button with ID "signIn " not found.');
  }
});
