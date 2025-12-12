// Back button
document.getElementById("backBtn").addEventListener("click", function () {
  window.location.href = "../Home-screen/home.html";
});

// View Ticket
document.getElementById("viewBtn").addEventListener("click", function () {
  window.location.href = "../E-ticket/e_tickect.html";
});

// Cancel Booking
document.getElementById("cancelBtn").addEventListener("click", function () {
  let confirmDelete = confirm("Are you sure you want to cancel your booking?");
  if (confirmDelete) {
    alert("Booking cancelled successfully.");
  }
});

// Bottom Navigation
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  // Attach handlers by label text (more robust than fixed indices)
  navItems.forEach((item) => {
    const label = (item.textContent || "").trim().toLowerCase();

    if (label === "home" || label.includes("home")) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = "../Home-screen/home.html";
      });
    }

    if (label === "my trip" || label.includes("trip")) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        // Already on trip page, no navigation needed
      });
    }

    if (label === "explore" || label.includes("explore")) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = "../Explore/explore.html";
      });
    }

    if (label === "profile" || label.includes("profile")) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = "../Profile/profile.html";
      });
    }
  });
});
