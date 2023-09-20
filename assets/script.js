// JavaScript para cambiar el header a un cuadro interactivo en pantallas pequeñas

const header = document.getElementById('header');

// Agregar clase 'square' cuando el ancho de la pantalla sea menor que 670px
function toggleSquareHeader() {
    if (window.innerWidth < 670) {
        header.classList.add('square');
    } else {
        header.classList.remove('square');
    }
}

toggleSquareHeader(); // Ejecutar la función al cargar la página

// Alternar la clase 'active' para mostrar/ocultar el menú al hacer clic en el cuadro interactivo
header.addEventListener('click', function () {
    if (header.classList.contains('square')) {
        header.classList.toggle('active');
    }
});

// Volver a comprobar el tamaño de la pantalla cuando se redimensiona
window.addEventListener('resize', toggleSquareHeader);
