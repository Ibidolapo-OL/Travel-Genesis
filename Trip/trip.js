// Back button
document.getElementById("backBtn").addEventListener("click", function () {
  alert("Going back...");
});

// View Ticket
document.getElementById("viewBtn").addEventListener("click", function () {
  alert("Opening your ticket...");
});

// Cancel Booking
document.getElementById("cancelBtn").addEventListener("click", function () {
  let confirmDelete = confirm("Are you sure you want to cancel your booking?");
  if (confirmDelete) {
    alert("Booking cancelled successfully.");
  }
});
