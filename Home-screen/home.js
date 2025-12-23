// =====================================================
// USER GREETING
// =====================================================
document.addEventListener("DOMContentLoaded", function () {
  const greetingsElement = document.getElementById("greetings");

  if (greetingsElement) {
    const userName = localStorage.getItem("userName");
    const currentHour = new Date().getHours();
    let timeGreeting = "Hi";

    // if (currentHour < 12) {
    //   timeGreeting = "Good morning";
    // } else if (currentHour < 18) {
    //   timeGreeting = "Good afternoon";
    // } else {
    //   timeGreeting = "Good evening";
    // }

    if (userName) {
      greetingsElement.textContent = `${timeGreeting}, ${userName}`;
    } else {
      greetingsElement.textContent = `${timeGreeting}, Traveler`;
    }

    console.log("Greeting set:", greetingsElement.textContent);
  }
});

// =====================================================
// SEARCH BUTTON NAVIGATION
// =====================================================
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");

  const searchBtn = document.getElementById("search-btn");

  if (searchBtn) {
    console.log("Search button found!");

    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Search button clicked! Navigating to search page...");
      window.location.href = "../Search screen/search.html";
    });
  }
});

// =====================================================
// DEBUG CLICK LOGGER
// =====================================================
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

// =====================================================
// NOTIFICATION BUTTON
// =====================================================
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");

  const notificationBtn = document.getElementById("notification-btn");

  if (notificationBtn) {
    console.log("notification button found!");

    notificationBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("notification button clicked! Navigating to search page...");
      window.location.href = "../notification/notification.html";
    });
  }
});

// =====================================================
// BOOK BUTTON
// =====================================================
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

// =====================================================
// MY TRIP NAVIGATION
// =====================================================
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

// =====================================================
// EXPLORE NAVIGATION
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".bottom-nav .nav-item");
  if (navItems.length > 0) {
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

// =====================================================
// PROFILE NAVIGATION
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".bottom-nav .nav-item");
  if (navItems.length > 0) {
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

// =====================================================
// DESKTOP NAVIGATION
// =====================================================
document.addEventListener("DOMContentLoaded", function () {
  const desktopNavLinks = document.querySelectorAll(".desktop-nav a");

  desktopNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      desktopNavLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      const linkText = this.textContent.trim().toLowerCase();

      switch (linkText) {
        case "home":
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

  const bottomNavLinks = document.querySelectorAll(".bottom-nav .nav-item");

  bottomNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      bottomNavLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      const href = this.getAttribute("href");
      if (href && href !== "#") {
        window.location.href = href;
      }
    });
  });

  // Set active navigation based on current page
  function setActiveNav() {
    const currentPage = window.location.pathname;

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

    bottomNavLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && currentPage.includes(href.split("/").pop())) {
        link.classList.add("active");
      }
    });
  }

  setActiveNav();
});
