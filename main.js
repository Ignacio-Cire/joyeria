


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


// EFECTO MODAL 


  











