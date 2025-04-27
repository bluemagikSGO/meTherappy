document.addEventListener("DOMContentLoaded", function () {
  // Initialize Chart
  const ctx = document.getElementById("wellnessChart").getContext("2d");
  const wellnessChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Mood Score",
          data: [65, 59, 70, 71, 76, 80],
          backgroundColor: "rgba(52, 152, 219, 0.2)",
          borderColor: "rgba(52, 152, 219, 1)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 50,
          max: 100,
        },
      },
    },
  });

  // Mood Selector
  const moodButtons = document.querySelectorAll(".mood-btn");
  moodButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      moodButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.innerHTML = btn.innerHTML.replace(" ✓", "");
      });

      // Add active class to clicked button
      this.classList.add("active");
      this.innerHTML += " ✓";

      // Here you would typically send this data to your backend
      const mood = this.classList.contains("happy")
        ? "happy"
        : this.classList.contains("neutral")
        ? "neutral"
        : "sad";

      console.log(`Mood selected: ${mood}`);
      // Example: sendMoodToServer(mood);
    });
  });

  // Appointment Join Button
  const joinButtons = document.querySelectorAll(".btn.primary:not(:disabled)");
  joinButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // In a real app, this would launch the video session
      alert("Connecting to your therapy session...");
    });
  });

  // Notification Bell
  const notificationBell = document.querySelector(".notifications");
  notificationBell.addEventListener("click", function () {
    // In a real app, this would show a dropdown with notifications
    alert("You have 3 unread notifications");
  });

  // Logout Button
  const logoutButton = document.querySelector(".logout-btn");
  logoutButton.addEventListener("click", function () {});

  // Mobile Menu Toggle (if you add a mobile menu button)
  const mobileMenuButton = document.createElement("div");
  mobileMenuButton.className = "mobile-menu-button";
  mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector(".top-nav").prepend(mobileMenuButton);

  mobileMenuButton.addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("mobile-visible");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".sidebar");
    if (
      !sidebar.contains(event.target) &&
      event.target !== mobileMenuButton &&
      !mobileMenuButton.contains(event.target)
    ) {
      sidebar.classList.remove("mobile-visible");
    }
  });
});

// In index.js
$(document).ready(function () {
  // Handle logout button click (works for both jQuery and vanilla JS)
  $(document).on("click", ".logout-btn", function (e) {
    e.preventDefault();

    if (confirm("Are you sure you want to logout?")) {
      // Perform logout actions
      console.log("User confirmed logout");
      window.location.href = "index.html";
    }
  });
});

// switch toggle for aside
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("cbx-51");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");

  toggle.addEventListener("change", function () {
    if (this.checked) {
      sidebar.classList.add("collapsed");
    } else {
      sidebar.classList.remove("collapsed");
    }
  });
});

// hamburger
// hamburger
const hamburger = document.querySelector(".hamburger-2");
const sidebar = document.querySelector(".sidebar");
const overlay = document.createElement("div");
overlay.className = "sidebar-overlay";
document.body.appendChild(overlay);

if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// Close sidebar when clicking outside or on overlay
document.addEventListener("click", function (event) {
  if (
    sidebar &&
    hamburger &&
    !sidebar.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// Also close when clicking overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
