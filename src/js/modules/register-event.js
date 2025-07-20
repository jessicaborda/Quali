/**
 * Registration form handler module.
 * Handles user registration form submission.
 */

(function() {
  'use strict';

  const registerForm = document.getElementById('register-form');

  if (!registerForm) {
    console.warn('Register form not found');
    return;
  }

  /**
   * Validates email format.
   * @param {string} email - The email to validate.
   * @returns {boolean} - Whether the email is valid.
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validates form fields.
   * @param {Object} formData - The form data object.
   * @returns {boolean} - Whether the form is valid.
   */
  function validateForm(formData) {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.auth-form__error').forEach(el => {
      el.textContent = '';
    });

    if (!formData.name.trim()) {
      document.getElementById('name-error').textContent = 'El nombre es requerido';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      document.getElementById('lastname-error').textContent = 'El apellido es requerido';
      isValid = false;
    }

    if (!formData.email.trim()) {
      document.getElementById('email-error').textContent = 'El correo es requerido';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      document.getElementById('email-error').textContent = 'Ingresa un correo válido';
      isValid = false;
    }

    if (!formData.password.trim()) {
      document.getElementById('password-error').textContent = 'La contraseña es requerida';
      isValid = false;
    } else if (formData.password.length < 6) {
      document.getElementById('password-error').textContent = 'La contraseña debe tener al menos 6 caracteres';
      isValid = false;
    }

    return isValid;
  }

  /**
   * Handles form submission.
   * @param {Event} event - The submit event.
   */
  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      lastName: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };

    if (validateForm(formData)) {
      // Redirect to user panel on successful registration
      window.location.href = '../usuario/panel.html';
    }
  }

  registerForm.addEventListener('submit', handleSubmit);
})();
