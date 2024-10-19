document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if(name && email && message) {
        document.getElementById('formResponse').innerText = "Thank you for your message, " + name + "!";
        this.reset();  // Clear the form
    } else {
        document.getElementById('formResponse').innerText = "Please fill in all fields.";
    }
});