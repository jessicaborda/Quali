// Seleccionar el formulario
const form = document.getElementById("registerForm");

// Evento "submit"
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página se recargue

  // Obtener los valores de los campos
  const nombre = document.getElementById("name").value.trim();
  const apellido = document.getElementById("last_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validación
  if (nombre && apellido && email && password) {
    // Redirigir al panel de usuario
    window.location.href = "/pages/panel_usuario.html";
  } else {
    alert("Por favor completa todos los campos.");
  }
});