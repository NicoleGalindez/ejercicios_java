/*
<form id="login-form">
  <input type="email" id="email" placeholder="Correo electrónico">
  <input type="password" id="password" placeholder="Contraseña">
  <button type="submit">Iniciar sesión</button>
</form>
*/




document.getElementById("inicioSesion").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtén los valores del formulario
    let email = document.getElementById(".usuario").value;
    let password = document.getElementById(".contraseña").value;
  
    // Realiza la validación en el lado del cliente
    if (usuario !== "adso2556678" || contraseña !== "adso2023"){

    } else{
      alert("Ingresa un correo electrónico y contraseña válidos.");
      return;
    }
  
    // Envía los datos al servidor para realizar la validación en el lado del servidor
    // Puedes utilizar una solicitud AJAX o Fetch para enviar los datos al servidor
  
    // Aquí puedes agregar tu lógica para enviar los datos al servidor y manejar la respuesta
  
  });
  