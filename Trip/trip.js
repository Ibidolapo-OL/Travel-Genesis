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
  window.location.href = "../cancelbooking/cancelbooking.html";
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
  }); // for the delete account button
  document.addEventListener("DOMContentLoaded", function () {
    const logoutbtn = document.getElementById("btn-cancelbtn-delete");
    if (logoutbtn) {
      logoutbtn.addEventListener("click", function () {
        console.log("returning to splash page...");

        window.location.href = "../Splash/splash.html";
      });
    }
  });

  cancelBtn;
});
