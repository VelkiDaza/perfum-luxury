// register.js

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Capturar los valores de los campos del formulario
    const formUser = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      gender: document.getElementById('gender').value
    };
  
    // Verificar que todos los campos estén llenos
    if (!formUser.firstName || !formUser.lastName || !formUser.email || !formUser.password || !formUser.gender) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Guardar el objeto en localStorage
    localStorage.setItem('formUser', JSON.stringify(formUser));
  
    // Confirmación de registro y limpieza del formulario
    alert('¡Registro exitoso! Redirigiendo al login...');
    document.getElementById('registerForm').reset();
  
    // Redirigir a la página de login
    window.location.href = './login.html';
  });
  