// Add click functionality to seats
document.querySelectorAll(".seat.available, .seat.selected").forEach((seat) => {
  seat.addEventListener("click", function () {
    if (!this.classList.contains("booked")) {
      this.classList.toggle("selected");
      this.classList.toggle("available");
    }
  });
});
