document.querySelectorAll('.open-modal').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();  // Prevenir que se siga el enlace
        var url = this.getAttribute('data-url');  // Obtener la URL de la página externa
        var iframe = document.getElementById('modal-frame');  // Obtener el iframe en el modal
        iframe.src = url;  // Asignar la URL al iframe
    });
});

// Limpiar el iframe cuando se cierre el modal para evitar que se quede cargado el contenido de la página
$('#myModal').on('hidden.bs.modal', function () {
    document.getElementById('modal-frame').src = '';  // Limpiar el contenido del iframe
});