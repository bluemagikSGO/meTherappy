let currentIndex = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  
  function showNextTestimonial() {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
  }

  setInterval(showNextTestimonial, 4000); // Change every 4 seconds


  // FAQ

  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
  });