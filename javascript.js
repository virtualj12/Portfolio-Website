// EDUCATION CAROUSEL


const carouselItems = document.querySelectorAll('.carousel-item-ee');
const prevBtn = document.querySelector('.carousel-control-prev-ee');
const nextBtn = document.querySelector('.carousel-control-next-ee');

let currentItem = 0;

// Initialize the first item as active
carouselItems[currentItem].classList.add('active-ee');

// Function to show the current item
function showItem(index) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    index = 0;
  }

  // Hide all items except for the active one
  carouselItems.forEach(item => {
    item.classList.remove('active-ee');
  });

  // Show the active item
  carouselItems[index].classList.add('active-ee');
  currentItem = index;
}

// Previous button click event listener
prevBtn.addEventListener('click', () => {
  showItem(currentItem - 1);
});

// Next button click event listener
nextBtn.addEventListener('click', () => {
  showItem(currentItem + 1);
});

// Set interval to automatically cycle through the items
setInterval(() => {
  showItem(currentItem + 1);
}, 5000);


// EXPERIENCE CAROUSEL

const rightColumn = document.querySelector('.right-column-ee');
const rightColumnItems = document.querySelectorAll('.carousel-item-experience');
const rightColumnPrevBtn = document.querySelector('.carousel-control-prev-experience');
const rightColumnNextBtn = document.querySelector('.carousel-control-next-experience');

let currentRightColumnItem = 0;

function showRightColumnItem(index) {
  if (index < 0) {
    index = rightColumnItems.length - 1;
  } else if (index >= rightColumnItems.length) {
    index = 0;
  }

  // Hide all items except for the active one
  rightColumnItems.forEach(item => {
    item.classList.remove('active-experience');
  });

  // Show the active item
  rightColumnItems[index].classList.add('active-experience');
  currentRightColumnItem = index;
}

rightColumnPrevBtn.addEventListener('click', () => {
  showRightColumnItem(currentRightColumnItem - 1);
});

rightColumnNextBtn.addEventListener('click', () => {
  showRightColumnItem(currentRightColumnItem + 1);
});

setInterval(() => {
  showRightColumnItem(currentRightColumnItem + 1);
}, 5000);


// PROJECT PORTFOLIO

function showPopup(id) {
  var popup = document.getElementById(id);
  popup.style.display = "flex";
  document.querySelector('html').classList.add("popup-active"); // add class to blur background
  document.querySelector('.navbar').classList.add("hidden"); // hide navbar
  document.querySelectorAll('.card-pp').forEach(function(card) {
    if (!card.classList.contains(id)) {
      card.classList.add("blur"); // blur the card content
    }
  });

  // Add sticky property to the popup card
  document.querySelector('.popup-card-pp .content-pp').classList.add("sticky");

  // Close the popup when clicking on the backdrop
  document.querySelector('.popup-card-pp').addEventListener('click', function(e) {
    if (e.target == this) {
      closePopup(id);
    }
  });
}

function closePopup(id) {
  var popup = document.getElementById(id);
  popup.style.display = "none";
  document.querySelector('html').classList.remove("popup-active"); // remove class to unblur background
  document.querySelector('.navbar').classList.remove("hidden"); // show navbar
  document.querySelectorAll('.card-pp').forEach(function(card) {
    if (!card.classList.contains(id)) {
      card.classList.remove("blur"); // remove blur from card content
    }
  });

  // Remove sticky property from the popup card
  document.querySelector('.popup-card-pp .content-pp').classList.remove("sticky");
}


// FOOTER

// Get the contact button and popup form
var contactBtn = document.getElementById("contact-btn");
var contactForm = document.getElementById("contact-popup");
var cancelButton = document.querySelector(".cancel-btn");

// When the contact button is clicked, show the popup form
contactBtn.addEventListener("click", function() {
  contactForm.style.display = "block";
});

// When the user clicks the cancel button or outside the popup form, hide it
function closeContactForm() {
  contactForm.style.display = "none";
}

cancelButton.addEventListener("click", closeContactForm);

window.addEventListener("click", function(event) {
  if (event.target == contactForm) {
    closeContactForm();
  }
});

// When the user submits the contact form, log the data to the console
var form = document.querySelector("#contact-form form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = form.querySelector("#name").value;
  var email = form.querySelector("#email").value;
  var message = form.querySelector("#message").value;
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);
  form.reset();
  closeContactForm();
});

