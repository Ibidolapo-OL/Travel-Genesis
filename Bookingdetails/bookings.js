//  Add functionality to edit buttons
document.querySelectorAll(".edit-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const item = this.closest(".detail-item");
    const label = item.querySelector(".detail-label").textContent;
  });
});

// Back button functionality
document.querySelector(".back-btn").addEventListener("click", function () {});

// Continue button functionality
document
  .querySelector(".continue-btn")
  .addEventListener("click", function () {});

///when the booking back is clicked

document.addEventListener("DOMContentLoaded", () => {
  const bookingbackbtn = document.getElementById("back-btn");

  if (bookingbackbtn) {
    bookingbackbtn.addEventListener("click", () => {
      window.location.href = "../SEAT/seat.html";
    });
  }
});

///when the continue is beeng is clicked

document.addEventListener("DOMContentLoaded", () => {
  const continuebtn = document.getElementById("continue-btn");

  // Back button - navigate to previous page
  if (continuebtn) {
    continuebtn.addEventListener("click", () => {
      window.location.href = "../Payment/payment.html";
    });
  }
});
