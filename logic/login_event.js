// Seleccionar el formulario de login
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener valores
  const usuario = document.getElementById("user_name").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validación básica
  if (usuario && password) {
    // Redirigir al panel
    window.location.href = "/pages/panel_usuario.html"; 
  } else {
    alert("Debes ingresar usuario y contraseña.");
  }
});
