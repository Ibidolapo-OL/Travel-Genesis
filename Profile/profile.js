// Load user data when page loads
document.addEventListener("DOMContentLoaded", function () {
  loadUserProfile();
});

// Function to load user profile data from localStorage
function loadUserProfile() {
  // Get user data from localStorage
  const userFullName = localStorage.getItem("userFullName");
  const userEmail = localStorage.getItem("userEmail");

  // Debug: Log to console to verify data is being retrieved
  console.log("Loading from localStorage:");
  console.log("Full Name:", userFullName);
  console.log("Email:", userEmail);

  // Update profile name
  const profileNameElement = document.querySelector(".profile-name");
  if (profileNameElement) {
    if (userFullName && userFullName !== "") {
      profileNameElement.textContent = userFullName;
      console.log("Updated profile name to:", userFullName);
    } else {
      profileNameElement.textContent = "Naomi Davies"; // Default name
      console.log("Using default name");
    }
  }

  // Update profile email
  const profileEmailElement = document.querySelector(".profile-email");
  if (profileEmailElement) {
    if (userEmail && userEmail !== "") {
      profileEmailElement.textContent = userEmail;
      console.log("Updated profile email to:", userEmail);
    } else {
      profileEmailElement.textContent = "davilesnaomi05@gmail.com"; // Default email
      console.log("Using default email");
    }
  }
}

// Menu item navigation handlers
document.addEventListener("DOMContentLoaded", function () {
  // Notifications menu item
  const notificationsMenuItem = document.querySelector(
    '.profile-menu a[href="../notification/notification.html"]'
  );
  if (notificationsMenuItem) {
    notificationsMenuItem.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = "../notification/notification.html";
    });
  }

  // My Tickets menu item
  const ticketsMenuItem = document.querySelector(
    '.profile-menu a[href="../E-ticket/e_tickect.html"]'
  );
  if (ticketsMenuItem) {
    ticketsMenuItem.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = "../E-ticket/e_tickect.html";
    });
  }

  // Explore Us menu item
  const exploreMenuItem = document.querySelector(
    '.profile-menu a[href="../Explore/explore.html"]'
  );
  if (exploreMenuItem) {
    exploreMenuItem.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = "../Explore/explore.html";
    });
  }

  // Settings menu item
  const settingsMenuItem = document.querySelector(
    '.profile-menu a[href="../settings/settings.html"]'
  );
  if (settingsMenuItem) {
    settingsMenuItem.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = "../settings/settings.html";
    });
  }
});

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", function (e) {
  e.preventDefault();

  window.location.href = "../Logout/logout.html";
});

// Delete Account functionality
document
  .getElementById("deleteAccountBtn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    window.location.href = "../Delete/delete.html";
  });

// Profile nav item - prevent default (already on profile page)
document
  .getElementById("profileNavItem")
  .addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

// Bottom Navigation - Handle nav item clicks
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item:not(.active)");

  // Attach handlers by label text (robust approach)
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
        window.location.href = "../Trip/trip.html";
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
