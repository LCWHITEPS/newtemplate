const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");
const botonContacto = document.getElementById("botonContacto");

boton.addEventListener("click", function () {
    mensaje.textContent = "¡Bienvenido! JavaScript está funcionando correctamente.";
});

botonContacto.addEventListener("click", function () {
    alert("¡Gracias por querer contactarnos!");
});