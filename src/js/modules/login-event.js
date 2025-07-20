/**
 * Login form handler module.
 * Handles user authentication form submission.
 */

(function() {
  'use strict';

  const loginForm = document.getElementById('login-form');

  if (!loginForm) {
    console.warn('Login form not found');
    return;
  }

  /**
   * Validates form fields.
   * @param {string} username - The username value.
   * @param {string} password - The password value.
   * @returns {boolean} - Whether the form is valid.
   */
  function validateForm(username, password) {
    let isValid = true;

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // Clear previous errors
    usernameError.textContent = '';
    passwordError.textContent = '';

    if (!username.trim()) {
      usernameError.textContent = 'El usuario es requerido';
      isValid = false;
    }

    if (!password.trim()) {
      passwordError.textContent = 'La contraseña es requerida';
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

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (validateForm(username, password)) {
      // Redirect to user panel on successful validation
      window.location.href = '../usuario/panel.html';
    }
  }

  loginForm.addEventListener('submit', handleSubmit);
})();
