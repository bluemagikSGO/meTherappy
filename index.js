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


  // back to top

  
  const aboutSection = document.querySelector(".about");
  const footerSection = document.querySelector("footer");
  const icon = document.querySelector(".fixed-icon");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const aboutTop = aboutSection.offsetTop;
    const footerTop = footerSection.offsetTop;

    if (scrollY >= aboutTop && scrollY < footerTop) {
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  });

  
