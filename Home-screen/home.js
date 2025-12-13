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

// Debug: click logger to help identify accidental targets (capture phase)
(function addClickLogger() {
  if (window.__clickLoggerAdded) return;
  document.addEventListener(
    "click",
    function (e) {
      try {
        const tgt = e.target;
        console.log(
          "DEBUG_CLICK -> target:",
          tgt,
          "class:",
          tgt.className,
          "text:",
          (tgt.textContent || "").trim()
        );
        if (e.composedPath) {
          const path = e.composedPath().map((el) => {
            if (!el) return el;
            if (el.tagName)
              return el.tagName + (el.className ? "." + el.className : "");
            return el;
          });
          console.log("DEBUG_CLICK path:", path);
        }
      } catch (err) {
        console.log("DEBUG_CLICK error", err);
      }
    },
    true
  );
  window.__clickLoggerAdded = true;
})();

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

// for the book button when it is clicked
document.addEventListener("DOMContentLoaded", () => {
  const bookbtns = document.querySelectorAll(".book-btn");
  if (bookbtns.length > 0) {
    bookbtns.forEach((bookbtn) => {
      bookbtn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(
          "Book button clicked! Navigating to flight details page..."
        );
        window.location.href = "../flightdetails/flight.html";
      });
    });
  }
});

// for the My Trip navigation click
document.addEventListener("DOMContentLoaded", () => {
  const myTripNavItem = document.querySelector(".nav-item:nth-child(2)");
  if (myTripNavItem) {
    myTripNavItem.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("My Trip clicked! Navigating to trip page...");
      window.location.href = "../Trip/trip.html";
    });
  }
});

// for the Explore navigation click
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".bottom-nav .nav-item");
  if (navItems.length > 0) {
    // Find nav item by visible label text to avoid index issues
    navItems.forEach((item) => {
      const label = (item.textContent || "").trim().toLowerCase();
      if (label === "explore" || label.includes("explore")) {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          console.log("Explore clicked! Navigating to explore page...");
          window.location.href = "../Explore/explore.html";
        });
      }
    });
  }
});

// for the Profile navigation click
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".bottom-nav .nav-item");
  if (navItems.length > 0) {
    // Find nav item by visible label text to avoid index issues
    navItems.forEach((item) => {
      const label = (item.textContent || "").trim().toLowerCase();
      if (label === "profile" || label.includes("profile")) {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          console.log("Profile clicked! Navigating to profile page...");
          window.location.href = "../Profile/profile.html";
        });
      }
    });
  }
});

///////////////desktop

document.addEventListener("DOMContentLoaded", function () {
  // =====================================================
  // DESKTOP NAVIGATION - Add this section
  // =====================================================
  const desktopNavLinks = document.querySelectorAll(".desktop-nav a");

  desktopNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      desktopNavLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Get the text content to determine which page to navigate to
      const linkText = this.textContent.trim().toLowerCase();

      // Navigate based on the link clicked
      switch (linkText) {
        case "home":
          // Already on home page, just scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;

        case "my trip":
          window.location.href = "../Trip/trip.html";
          break;

        case "explore":
          window.location.href = "../Explore/explore.html";
          break;

        case "profile":
          window.location.href = "../Profile/profile.html";
          break;

        default:
          console.log("Navigation link not configured:", linkText);
      }
    });
  });
});

const bottomNavLinks = document.querySelectorAll(".bottom-nav .nav-item");

bottomNavLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all bottom nav links
    bottomNavLinks.forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    this.classList.add("active");

    // Navigate to the appropriate page
    const href = this.getAttribute("href");
    if (href && href !== "#") {
      window.location.href = href;
    }
  });
});

// =====================================================
// SET ACTIVE NAVIGATION BASED ON CURRENT PAGE
// =====================================================
function setActiveNav() {
  const currentPage = window.location.pathname;

  // Set active for desktop nav
  desktopNavLinks.forEach((link) => {
    const linkText = link.textContent.trim().toLowerCase();

    if (
      (currentPage.includes("home.html") && linkText === "home") ||
      (currentPage.includes("trip.html") && linkText === "my trip") ||
      (currentPage.includes("explore.html") && linkText === "explore") ||
      (currentPage.includes("profile.html") && linkText === "profile")
    ) {
      link.classList.add("active");
    }
  });

  // Set active for bottom nav
  bottomNavLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && currentPage.includes(href.split("/").pop())) {
      link.classList.add("active");
    }
  });
}

// Call on page load
setActiveNav();
