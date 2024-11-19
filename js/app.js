document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos
    const registerButton = document.querySelector("#register-button"); // Botón de registro/cerrar sesión
    const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");
    const userNameElement = document.querySelector(".name");
  
    // Función para actualizar el botón según el estado de la sesión
    function updateSessionButton() {
      const formUser = JSON.parse(localStorage.getItem("formUser"));
  
      // Verificar si el objeto formUser existe y contiene email y password
      if (formUser && formUser.email && formUser.password) {
        // Si el usuario está autenticado, mostrar "Cerrar sesión"
        registerButton.textContent = "Cerrar sesión";
        registerButton.removeEventListener("click", handleRegister);
        registerButton.addEventListener("click", handleLogout);
        // Mostrar el nombre de usuario si existe
        if (formUser.firstName) {
            userNameElement.textContent = formUser.firstName;
          } else {
            userNameElement.textContent = ''; // Si no hay firstName, dejarlo vacío
          }
      } else {
        // Si no hay datos de usuario, mostrar "Registrarse"
        registerButton.textContent = "Registrarse";
        registerButton.removeEventListener("click", handleLogout);
        registerButton.addEventListener("click", handleRegister);
        // Si no hay usuario autenticado, dejar el nombre de usuario vacío
        userNameElement.textContent = '';
      }
    }
  
    // Función de cerrar sesión
    function handleLogout() {
      // Limpiar el localStorage
      localStorage.removeItem("formUser");
  
      // Mostrar una alerta de sesión cerrada
      alert("Sesión cerrada con éxito.");
  
      // Volver a mostrar el botón de "Registrarse"
      updateSessionButton();
    }
  
    // Función de registro (este puede llevar a un formulario de registro, por ejemplo)
    function handleRegister() {
      // Aquí puedes manejar la lógica para mostrar el formulario de registro
      alert("Redirigiendo al formulario de registro...");
      window.location.href = "register.html";
    }
  
    // Evento para abrir el menú móvil
    menuOpenButton.addEventListener("click", () => {
      document.body.classList.toggle("show-mobile-menu");
    });
  
    // Cerrar el menú al hacer clic en el botón de cerrar
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());
  
    // Cerrar el menú al hacer clic en un enlace de la navbar
    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => menuOpenButton.click());
    });
  
    // Inicializar el swiper
    let swiper = new Swiper(".slider-wrapper", {
      loop: true,
      grabCursor: true,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  
    // Llamar a la función para actualizar el estado del botón al cargar la página
    updateSessionButton();
});