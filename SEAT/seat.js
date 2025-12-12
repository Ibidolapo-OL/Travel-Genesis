// Add click functionality to seats
document.querySelectorAll(".seat.available, .seat.selected").forEach((seat) => {
  seat.addEventListener("click", function () {
    if (!this.classList.contains("booked")) {
      this.classList.toggle("selected");
      this.classList.toggle("available");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-btn");

  // Back button - navigate to previous page
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "../DatePicker/datepicker.html";
    });
  }
});

///when the continue is clicked

document.addEventListener("DOMContentLoaded", () => {
  const contineuBtn = document.getElementById("continue-btn");

  // Back button - navigate to previous page
  if (contineuBtn) {
    contineuBtn.addEventListener("click", () => {
      window.location.href = "../Bookingdetails/bookings.html";
    });
  }
});

///when the continue back is clicked

document.addEventListener("DOMContentLoaded", () => {
  const continebackBtn = document.getElementById("back-btn");

  // Back button - navigate to previous page
  if (continebackBtn) {
    continebackBtn.addEventListener("click", () => {
      window.location.href = "../DatePicker/datepicker.html";
    });
  }
});
