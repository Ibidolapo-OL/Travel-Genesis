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
  const confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    // Navigate to home or login page
    window.location.href = "../Home-screen/home.html";
  }
});

// Delete Account functionality
document
  .getElementById("deleteAccountBtn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const confirmDelete = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      const finalConfirm = confirm(
        "This is your last chance. Are you absolutely sure?"
      );
      if (finalConfirm) {
        alert("Your account has been deleted successfully.");
        window.location.href = "../Home-screen/home.html";
      }
    }
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
