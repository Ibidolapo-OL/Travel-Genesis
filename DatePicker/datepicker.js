// Back button functionality
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-btn");
  const nextBtn = document.getElementById("next-btn");
  let selectedDate = null;

  // Back button - navigate to previous page
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "../flightdetails/flight.html";
    });
  }

  // Handle day selection
  const dayElements = document.querySelectorAll(".day:not(.empty)");
  dayElements.forEach((dayElement) => {
    dayElement.addEventListener("click", () => {
      // Remove previous selection
      dayElements.forEach((day) => day.classList.remove("selected"));

      // Add selection to clicked day
      dayElement.classList.add("selected");
      selectedDate = dayElement.textContent;

      console.log("Selected date: " + selectedDate);
    });
  });

  // Next button functionality
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (selectedDate) {
        console.log("Proceeding with date: " + selectedDate);
        // Navigate to next page
        window.location.href = "../SEAT/seat.html";
      } else {
        alert("Please select a date first");
      }
    });
  }
});
