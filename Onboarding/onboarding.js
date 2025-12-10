document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("nextBtn");
  nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "../Onboarding 2/onboarding2.html";
  });
});
// Skip button functionality
document.addEventListener("DOMContentLoaded", () => {
  const skipButton = document.getElementById("skipBtn");

  skipButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "../Signup Screen/signup.html";
  });
});
