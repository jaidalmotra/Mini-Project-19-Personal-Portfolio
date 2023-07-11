var typed = new Typed('#element', {
  strings: ['Web Development', 'Graphic Designing', 'Machine Learning ', 'Deep Learning','Cloud'],
  typeSpeed: 60,
  loop: true //for enabling loop
});

const form = document.querySelector('.contactform');
const fullNameInput = form.querySelector('input[name="full-name"]');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea');
const sendButton = form.querySelector('input[type="submit"]');

sendButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  removeErrorMessage(fullNameInput);
  removeErrorMessage(emailInput);
  removeErrorMessage(messageInput);

  if (fullNameInput.value.trim() === '') {
    displayErrorMessage(fullNameInput, 'Please enter your full name.');
  }

  if (emailInput.value.trim() === '') {
    displayErrorMessage(emailInput, 'Please enter your email address.');
  }

  if (messageInput.value.trim() === '') {
    displayErrorMessage(messageInput, 'Please enter your message.');
  }

  if (isFormValid()) {
    // Proceed with form submission
    form.submit();
  }
});

function displayErrorMessage(inputElement, message) {
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');
  errorElement.innerText = message;

  const parentElement = inputElement.parentElement;
  parentElement.appendChild(errorElement);
}

function removeErrorMessage(inputElement) {
  const parentElement = inputElement.parentElement;
  const errorElement = parentElement.querySelector('.error-message');

  if (errorElement) {
    parentElement.removeChild(errorElement);
  }
}

function isFormValid() {
  return (
    fullNameInput.value.trim() !== '' &&
    emailInput.value.trim() !== '' &&
    messageInput.value.trim() !== ''
  );
}



const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = "myCV.pdf"; // Replace "path_to_your_cv_document" with the actual path to your CV document
  a.download = "cv_document.pdf"; // Replace "cv_document.pdf" with the desired file name for your CV

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});



    // JavaScript code for smooth scrolling
    document.addEventListener('DOMContentLoaded', () => {
      const navLinks = document.querySelectorAll('nav a');

      navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default link behavior

          const targetSectionId = link.getAttribute('href'); // Get the target section ID

          // Scroll smoothly to the target section
          document.querySelector(targetSectionId).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    }); 