// login.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Capturar los valores de los campos de email y password
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    // Obtener el objeto formUser del localStorage
    const storedUser = JSON.parse(localStorage.getItem('formUser'));
  
    // Validar que el usuario existe y que las credenciales coinciden
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Inicio de sesión exitoso. Redirigiendo...');
      window.location.href = './index.html';
    } else {
      alert('Credenciales incorrectas. Verifique sus datos para iniciar sesión.');
    }
  });
  