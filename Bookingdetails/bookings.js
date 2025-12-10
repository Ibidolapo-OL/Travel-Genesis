//  Add functionality to edit buttons
document.querySelectorAll(".edit-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const item = this.closest(".detail-item");
    const label = item.querySelector(".detail-label").textContent;
    alert(`Edit ${label}`);
  });
});

// Back button functionality
document.querySelector(".back-btn").addEventListener("click", function () {
  alert("Go back to previous page");
});

// Continue button functionality
document.querySelector(".continue-btn").addEventListener("click", function () {
  alert("Proceeding to payment...");
});
