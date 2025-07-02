const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';
    nameField.classList.remove('error-border');
    emailField.classList.remove('error-border');
    messageField.classList.remove('error-border');
    let isValid = true;
    if (name === '') {
        nameError.textContent = 'Name is required.';
        nameField.classList.add('error-border');
        isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    if (email === '') {
        emailError.textContent = 'Email is required.';
        emailField.classList.add('error-border');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Enter a valid email.';
        emailField.classList.add('error-border');
        isValid = false;
    }
    if (message === '') {
        messageError.textContent = 'Message is required.';
        messageField.classList.add('error-border');
        isValid = false;
    }
    if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
        form.reset();
    }
});
