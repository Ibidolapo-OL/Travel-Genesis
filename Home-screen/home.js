// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");

  // Get the search button element
  const searchBtn = document.getElementById("search-btn");

  if (searchBtn) {
    console.log("Search button found!");

    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Prevent any default behavior
      console.log("Search button clicked! Navigating to search page...");

      // Navigate to the search results page
      window.location.href = "../Search screen/search.html";
    });
  }
});

// for the notification click

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");

  // Get the search button element
  const notificationBtn = document.getElementById("notification-btn");

  if (notificationBtn) {
    console.log("notification button found!");

    notificationBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Prevent any default behavior
      console.log("notification button clicked! Navigating to search page...");

      // Navigate to the search results page
      window.location.href = "../notification/notification.html";
    });
  }
});
