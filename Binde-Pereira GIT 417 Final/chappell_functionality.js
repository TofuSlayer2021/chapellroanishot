// Dark mode
document.addEventListener("DOMContentLoaded", function() {
    var currentStylesheet = 1;
    var button = document.getElementById("change_button");
    var stylesheet1 = document.getElementById("light_mode");
    var stylesheet2 = document.getElementById("dark_mode");

    button.addEventListener("click", function() {
        if (currentStylesheet === 1) {
            stylesheet1.disabled = true;
            stylesheet2.disabled = false;
            currentStylesheet = 2;
        }else{
            stylesheet2.disabled = true;
            stylesheet1.disabled = false;
            currentStylesheet = 1; 
        }
    });
});

// How to toggle between products
function productToggleFirst(){
    const firstProduct = document.getElementById('prod_1'); 
    const secondProduct = document.getElementById('prod_2'); 
    const thirdProduct = document.getElementById('prod_3'); 
    if (firstProduct.style.zIndex != "3") {
        firstProduct.style.zIndex = "3";
        secondProduct.style.zIndex = "1";
        thirdProduct.style.zIndex = "0";
    }
}

function productToggleSecond(){
    const firstProduct = document.getElementById('prod_1'); 
    const secondProduct = document.getElementById('prod_2'); 
    const thirdProduct = document.getElementById('prod_3'); 
    if (secondProduct.style.zIndex != "3") {
        secondProduct.style.zIndex = "3";
        firstProduct.style.zIndex = "1";
        thirdProduct.style.zIndex = "0";
    }
}

function productToggleThird(){
    const firstProduct = document.getElementById('prod_1'); 
    const secondProduct = document.getElementById('prod_2'); 
    const thirdProduct = document.getElementById('prod_3'); 
    if (thirdProduct.style.zIndex != "3") {
        thirdProduct.style.zIndex = "3";
        secondProduct.style.zIndex = "1";
        firstProduct.style.zIndex = "0";
    }
}

// Guessing game
function winShirt() {
    var userGuess = parseInt(document.getElementById('guess').value);
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Random number:", randomNumber);
    var output = document.getElementById("output");
    if (userGuess === randomNumber) {
        output.textContent = "You Win! You get to be the prettiest girl at the party";
    } else {
        output.textContent = "Good try babe. Try again.";
    }
    event.preventDefault();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("play_button").addEventListener("click", winShirt)
});


// Form validation
// This submits the form
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        if (validateForm()) {
            submitForm();
        }
    });
});

function validateForm() {
    var isValid = true;

    // Reset all error messages
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.textContent = '';
    });

    // Validate first name
    var firstName = document.getElementById('firstName').value.trim();
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required';
        isValid = false;
    }

    // Validate last name
    var lastName = document.getElementById('lastName').value.trim();
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        isValid = false;
    }

    // Validate phone number
    var phone = document.getElementById('phone').value.trim();
    var phonePattern = /^[0-9]{10}$/; // 10 digit number
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }

    // Validate email
    var email = document.getElementById('email').value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate preferred contact method
    var contactMethod = document.querySelector('input[name="contactMethod"]:checked');
    if (!contactMethod) {
        document.getElementById('contactMethodError').textContent = 'Please select preferred contact method';
        isValid = false;
    } else {
        var contactValue = contactMethod.value;
        if (contactValue === 'phone' && !phonePattern.test(phone)) {
            document.getElementById('phoneError').textContent = 'Phone number is required for phone contact';
            isValid = false;
        } else if (contactValue === 'email' && !emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Email address is required for email contact';
            isValid = false;
        }
    }

    // Validate comments
    var comments = document.getElementById('comments').value.trim();
    if (comments === '') {
        document.getElementById('commentsError').textContent = 'Comments are required';
        isValid = false;
    }
    return isValid;
}

function submitForm() {
    var customer = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        contactMethod: document.querySelector('input[name="contactMethod"]:checked').value,
        comments: document.getElementById('comments').value
    };

    // This displays a message once the form is submitted.
    document.getElementById('contactForm').reset();
    document.getElementById('submissionMessage').style.display = 'block';
    document.getElementById('submittedInfo').innerHTML = `
        <strong>Name:</strong> ${customer.firstName} ${customer.lastName}<br>
        <strong>Contact:</strong> ${customer[customer.contactMethod]}<br>
        <strong>Comments:</strong><br>${customer.comments}
    `;
}
