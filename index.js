let currentIndex = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  
  function showNextTestimonial() {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
  }

  setInterval(showNextTestimonial, 3000); // Change every 4 seconds


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

  // login modal

  $(document).ready(function() {
    // Get the elements
    const loginLink = $('#login-link');
    const loginModal = $('#login-modal');
    const closeModalButton = $('#close-modal');
    const cancelButton = $('#cancel-button');
    const loginButtonElement = $('#login-button');
    const usernameInput = $('#username');
    const passwordInput = $('#password');
    const errorMessage = $('#login-error-message');

    // Function to show the modal
    function showLoginModal() {
        loginModal.css('display', 'flex');
        // Clear input fields and error message when modal is shown
        usernameInput.val('');
        passwordInput.val('');
        errorMessage.hide();
    }

    // Function to hide the modal
    function hideLoginModal() {
        loginModal.css('display', 'none');
    }

    // Event listener for the login link
    loginLink.on('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior (e.g., navigating to a new page)
        showLoginModal();
    });

    // Event listener for the close button
    closeModalButton.on('click', hideLoginModal);
    cancelButton.on('click', hideLoginModal);

    // Event listener for clicking outside the modal
    $(window).on('click', function(event) {
        if (event.target === loginModal[0]) { 
            hideLoginModal();
        }
    });

    // Event listener for the login button
    loginButtonElement.on('click', function() {
        const username = usernameInput.val();
        const password = passwordInput.val();

        // Simulate a login process (replace with your actual authentication logic)
        if (username === 'user' && password === 'password') {
            // Successful login: Redirect or perform actions as needed
            alert('Login successful!');
            hideLoginModal();
            // window.location.href = '/dashboard'; // Example: Redirect to dashboard
        } else {
            // Failed login: Show error message
            errorMessage.show();
        }
    });

  });

    // signup modal

    $(document).ready(function() {


      // Get signup elements
      const signupLink = $('#signup-link');
      const signupModal = $('#signup-modal');
      const closeSignupModalButton = $('#close-signup-modal');
      const cancelSignupButton = $('#cancel-signup-button');
      const signupButtonElement = $('#signup-button');
      const signupUsernameInput = $('#signup-username');
      const signupPasswordInput = $('#signup-password');
      const signupEmailInput = $('#signup-email');
      const signupErrorMessage = $('#signup-error-message');



      // Function to show the signup modal
      function showSignupModal() {
          signupModal.css('display', 'flex');
          signupUsernameInput.val('');
          signupPasswordInput.val('');
          signupEmailInput.val('');
          signupErrorMessage.hide();
      }

      // Function to hide the signup modal
      function hideSignupModal() {
          signupModal.css('display', 'none');
      }



      // Event listener for the signup link
      signupLink.on('click', function(event) {
          event.preventDefault();
          showSignupModal();
      });

      // Event listener for the close signup modal button
      closeSignupModalButton.on('click', hideSignupModal);
      cancelSignupButton.on('click', hideSignupModal);

      // Event listener for clicking outside the signup modal
      $(window).on('click', function(event) {
          if (event.target === signupModal[0]) {
              hideSignupModal();
          }
      });

      // Event listener for the signup button
      signupButtonElement.on('click', function() {
          const username = signupUsernameInput.val();
          const password = signupPasswordInput.val();
          const email = signupEmailInput.val();

          // client side validation
          let hasErrors = false;
          if (!username) {
              signupErrorMessage.text('Please enter a username.');
              signupErrorMessage.show();
              hasErrors = true;
          } else if (!password) {
              signupErrorMessage.text('Please enter a password.');
              signupErrorMessage.show();
              hasErrors = true;
          } else if (!email) {
              signupErrorMessage.text('Please enter an email.');
              signupErrorMessage.show();
              hasErrors = true;
          } else {
              signupErrorMessage.hide();
          }


          // Simulate a signup process
          if (!hasErrors) {
              // Replace this with your actual signup logic
              alert('Signup successful! Verify your email');
              hideSignupModal();
              // window.location.href = '/profile';
          }
      });
  });

  // terms and condition alert

  $('.tc-alert').click(function (){
    alert('By creating an account on meTherappy, you agree to our Terms and Conditions. meTherappy is a mental health platform that connects users with licensed or certified therapists for personal support and wellness growth. It is not intended for emergency services or crisis intervention. If you are experiencing a mental health "emergency", please contact local emergency services immediately. To use meTherappy, you must be at least 18 years old or the legal age of majority in your region, and all information you provide during signup must be accurate. You agree to keep your account secure and to use the platform respectfully. Therapists on meTherappy operate independently and are responsible for the care they provide; meTherappy serves only as a digital facilitator and does not offer clinical services itself. All payments, subscription fees, and session bookings are subject to our pricing structure and refund policy, and cancellations must be made at least 24 hours in advance to avoid charges. Your personal information and sessions are handled with confidentiality and care in accordance with our Privacy Policy. Any misuse of the platform — including harassment, hate speech, or illegal activity — may result in suspension or permanent removal from meTherappy. We reserve the right to update these terms at any time, and by continuing to use the platform after such updates, you accept the revised terms. For questions or support, contact us at support@metherappy.com. By proceeding, you confirm that you have read, understood, and agreed to these Terms and Conditions.')
  })


// hamburger

const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
 