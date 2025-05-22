$(document).ready(function () {
  // Tab functionality
  $(".tab-btn").click(function () {
    const tabId = $(this).data("tab") + "-tab";

    // Update active tab button
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    // Update active tab content
    $(".tab-content").removeClass("active");
    $("#" + tabId).addClass("active");
  });

  // Modal functionality
  $("#new-appointment-btn").click(function () {
    $("#appointment-modal").addClass("active");
  });

  $(".close-modal").click(function () {
    $("#appointment-modal").removeClass("active");
  });

  // Close modal when clicking outside
  $(document).click(function (e) {
    if ($(e.target).hasClass("modal-overlay")) {
      $("#appointment-modal").removeClass("active");
    }
  });

  // Form submission
  $("#appointment-form").submit(function (e) {
    e.preventDefault();

    // Here you would typically send the data to your backend
    // For demo purposes, we'll just close the modal
    $("#appointment-modal").removeClass("active");

    // Show success message (you can implement a proper notification system)
    alert("Appointment scheduled successfully!");

    // Reset form
    this.reset();
  });

  // Appointment actions
  $(".cancel-btn").click(function () {
    if (confirm("Are you sure you want to cancel this appointment?")) {
      $(this)
        .closest(".appointment-card")
        .find(".status-badge")
        .removeClass("confirmed pending")
        .addClass("cancelled")
        .text("Cancelled");

      // Disable join and reschedule buttons
      $(this).siblings(".join-btn, .reschedule-btn").prop("disabled", true);

      // Change card style
      $(this).closest(".appointment-card").addClass("cancelled");

      // In a real app, you would also send this to your backend
    }
  });

  $(".reschedule-btn").click(function () {
    $("#appointment-modal").addClass("active");
    // In a real app, you would pre-fill the form with the existing appointment details
  });
});
