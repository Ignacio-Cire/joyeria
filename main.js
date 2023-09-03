


const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 700;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}

//EFECTO CLICK "TODOS LOS PRODUCTOS"

document.addEventListener("DOMContentLoaded", function () {
    const btnTodosProductos = document.getElementById("btn-todos-productos");
    const productosOcultos = document.getElementById("productos-ocultos");

    btnTodosProductos.addEventListener("click", function () {
        if (productosOcultos.style.display === "none") {
            productosOcultos.style.display = "block";
        } else {
            productosOcultos.style.display = "none";
        }
    });
});


/**MODAL */

document.addEventListener("DOMContentLoaded", function () {
    const productos = document.querySelectorAll(".producto"); // Selecciona todas las imágenes con la clase .producto

    productos.forEach(function (producto) {
        producto.addEventListener("click", function () {
            const modal = document.getElementById("modal"); // Obtiene el modal
            const modalImg = document.getElementById("modal_img"); // Obtiene la imagen dentro del modal

            // Configura la imagen del modal para que sea la misma que se hizo clic
            modalImg.src = producto.querySelector("img").src;

            // Muestra el modal
            modal.style.display = "block";
        });
    });

    // Agrega un evento de clic al botón de cierre del modal
    const modalBoton = document.getElementById("modal_boton");
    modalBoton.addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.style.display = "none"; // Oculta el modal al hacer clic en el botón de cierre
    });
});

// Código para mostrar el modal cuando se hace clic en un producto
document.addEventListener("DOMContentLoaded", function () {
    const productos = document.querySelectorAll(".producto");

    productos.forEach(function (producto) {
        producto.addEventListener("click", function () {
            const modal = document.getElementById("modal");
            const modalImg = document.getElementById("modal_img");

            modalImg.src = producto.querySelector("img").src;

            // Muestra el modal y aplica un filtro de desenfoque al fondo del modal
            modal.style.display = "block";
            fondo.style.filter = "blur(5px)"; // Cambia el valor de desenfoque según tu preferencia
        });
    });

    const modalBoton = document.getElementById("modal_boton");
    modalBoton.addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
        fondo.style.filter = "none"; // Restablece el filtro de desenfoque cuando se cierra el modal
    });
});
  


  











