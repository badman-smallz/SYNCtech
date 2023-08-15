function submitForm() {
    const form = document.getElementById("registrationForm");
    form.submit();
}

// JavaScript to make header fixed on scroll
var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector('.navbar');

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        navbar.classList.add('fixed-header');
    } else {
        navbar.classList.remove('fixed-header');
    }

    prevScrollpos = currentScrollPos;
}
// Wait for the document to be ready
$(document).ready(function () {
    // When the "Register Now" button is clicked
    $('#registerButton').click(function () {
        // Open the registration form modal
        $('#registrationModal').modal('show');
    });
});
// Countdown Timer
const targetDate = new Date("2023-12-31"); // Adjust the target date
const interval = setInterval(function () {
  const currentDate = new Date();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining > 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update your timer display
    const timerDisplay = document.getElementById("countdown");
    timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    clearInterval(interval);
    timerDisplay.innerHTML = "Conference has started!";
  }
}, 1000);

// JavaScript for form validation
document.addEventListener("DOMContentLoaded", function () {
const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

registrationForm.addEventListener("submit", function (event) {
  let isValid = true;

  if (nameInput.value.trim() === "") {
    isValid = false;
    showError(nameInput, "Name is required");
  } else {
    removeError(nameInput);
  }

  if (!isValidEmail(emailInput.value)) {
    isValid = false;
    showError(emailInput, "Invalid email format");
  } else {
    removeError(emailInput);
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorSpan = formGroup.querySelector(".error-message");
  if (!errorSpan) {
    const newErrorSpan = document.createElement("span");
    newErrorSpan.className = "error-message";
    newErrorSpan.textContent = message;
    formGroup.appendChild(newErrorSpan);
  }
}

function removeError(input) {
  const formGroup = input.parentElement;
  const errorSpan = formGroup.querySelector(".error-message");
  if (errorSpan) {
    formGroup.removeChild(errorSpan);
  }
}
});
function initMap() {
const mapOptions = {
    center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Replace with your coordinates
    zoom: 15 // Adjust the zoom level as needed
};

const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
function submitForm() {
const form = document.getElementById("registrationForm");
form.submit();
}
