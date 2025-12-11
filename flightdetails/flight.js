function selectFlight(element) {
  // Remove selected class from all cards
  document.querySelectorAll(".flight-card").forEach((card) => {
    card.classList.remove("selected");
  });

  // Add selected class to clicked card
  element.classList.add("selected");
}

function continueFlight() {
  const selectedFlight = document.querySelector(".flight-card.selected");
  if (selectedFlight) {
    alert("Flight selected! Proceeding to booking...");
    // Add your navigation logic here
    // window.location.href = 'booking.html';
  } else {
    alert("Please select a flight first!");
  }
}

function goBack() {
  window.history.back();
  // Or: window.location.href = 'home.html';
}

// Add fade-in animation on page load
document.body.style.opacity = "0";
setTimeout(() => {
  document.body.style.transition = "opacity 0.3s ease";
  document.body.style.opacity = "1";
}, 100);
