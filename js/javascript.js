document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const feedback = document.getElementById('formFeedback');

    // Email validation regex
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add validation classes dynamically
    function validateInput(input, condition) {
        if (condition) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
    }

    // Real-time input validation
    nameInput.addEventListener('input', () => {
        validateInput(nameInput, nameInput.value.trim() !== '');
    });

    emailInput.addEventListener('input', () => {
        validateInput(emailInput, isValidEmail(emailInput.value.trim()));
    });

    messageInput.addEventListener('input', () => {
        validateInput(messageInput, messageInput.value.trim() !== '');
    });

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '' || !isValidEmail(email) || message === '') {
            feedback.textContent = 'Please fill out all fields correctly.';
            feedback.style.color = 'red';
            return;
        }

        // Prepare mailto link
        const mailtoLink = `mailto:info@bakewellbakery.co.za?subject=Contact Form Submission&body=
Name: ${encodeURIComponent(name)}
Email: ${encodeURIComponent(email)}
Message: ${encodeURIComponent(message)}`;

        // Open email client
        window.location.href = mailtoLink;

        feedback.textContent = 'Thank you! Your message is ready to be sent via your email client.';
        feedback.style.color = 'green';

        form.reset();
        nameInput.classList.remove('valid', 'invalid');
        emailInput.classList.remove('valid', 'invalid');
        messageInput.classList.remove('valid', 'invalid');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('enquiryForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const productInput = document.getElementById('product');
    const detailsInput = document.getElementById('details');
    const responseMessage = document.getElementById('responseMessage');

    // Email validation regex
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Validate fields dynamically
    function validateInput(input, condition) {
        if (condition) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
    }

    nameInput.addEventListener('input', () => {
        validateInput(nameInput, nameInput.value.trim() !== '');
    });

    emailInput.addEventListener('input', () => {
        validateInput(emailInput, isValidEmail(emailInput.value.trim()));
    });

    productInput.addEventListener('change', () => {
        validateInput(productInput, productInput.value !== '');
    });

    detailsInput.addEventListener('input', () => {
        validateInput(detailsInput, detailsInput.value.trim() !== '');
    });

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const product = productInput.value;
        const details = detailsInput.value.trim();

        if (name === '' || !isValidEmail(email) || product === '' || details === '') {
            responseMessage.textContent = 'Please fill out all fields correctly.';
            responseMessage.style.color = 'red';
            return;
        }

        // Simulate form submission (or you can integrate backend later)
        responseMessage.textContent = 'Thank you! Your enquiry has been submitted successfully.';
        responseMessage.style.color = 'green';

        // Reset form and remove validation classes
        form.reset();
        nameInput.classList.remove('valid', 'invalid');
        emailInput.classList.remove('valid', 'invalid');
        productInput.classList.remove('valid', 'invalid');
        detailsInput.classList.remove('valid', 'invalid');
    });
});
// Real-time Dynamic Content

// Display real-time greeting based on the time of day
function updateGreeting() {
    const greetingMessage = document.getElementById("greetingMessage");
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning! Start your day with our fresh pastries.";
    } else if (hour < 17) {
        greeting = "Good Afternoon! Grab a delicious snack on your break.";
    } else {
        greeting = "Good Evening! Enjoy our freshly baked goods before we close.";
    }

    greetingMessage.textContent = greeting;
}

// Display real-time date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById("currentDateTime");
    const now = new Date();
    dateTimeElement.textContent = "Current Time: " + now.toLocaleString();
}

// Daily rotating bakery special (auto changes daily)
function updateDailySpecial() {
    const specials = [
        "Today's Special: Chocolate Croissants – 15% off!",
        "Today's Special: Fresh Baguettes – Buy 2 Get 1 Free!",
        "Today's Special: Blueberry Muffins – 10% Discount!",
        "Today's Special: Cinnamon Rolls – Fresh from the oven!",
        "Today's Special: Vanilla Cupcakes – Free topping today!"
    ];

    const dayIndex = new Date().getDay();
    const specialElement = document.getElementById("dailySpecial");
    specialElement.textContent = specials[dayIndex];
}

// Refresh dynamic content every second
setInterval(updateDateTime, 1000);

// Initial load
updateGreeting();
updateDateTime();
updateDailySpecial();

// ===== DYNAMIC REAL-TIME CONTENT FOR ABOUT PAGE =====

// Live greeting message
function updateAboutGreeting() {
    const element = document.getElementById("liveWelcome");
    const hour = new Date().getHours();

    let greeting = "";
    if (hour < 12) {
        greeting = "Good Morning! Welcome to BakeWell Bakery.";
    } else if (hour < 17) {
        greeting = "Good Afternoon! Thanks for learning more about us.";
    } else {
        greeting = "Good Evening! We’re happy to have you here.";
    }

    if (element) element.textContent = greeting;
}

// Live date and time
function updateAboutDateTime() {
    const element = document.getElementById("liveTime");
    if (element) element.textContent = "Current Time: " + new Date().toLocaleString();
}

// Daily bakery fun fact
function updateAboutFact() {
    const facts = [
        "Did you know? Our sourdough bread ferments for 36 hours!",
        "Fun fact: We bake more than 200 loaves every single day!",
        "Our cupcakes are decorated individually by hand.",
        "BakeWell started as a small Saturday market stall.",
        "Our bakers start their day at 3:30 AM every morning!"
    ];

    const day = new Date().getDay();
    const element = document.getElementById("liveFact");
    if (element) element.textContent = facts[day];
}

// Refresh date/time every second
setInterval(updateAboutDateTime, 1000);

// Run once on load
updateAboutGreeting();
updateAboutDateTime();
updateAboutFact();

