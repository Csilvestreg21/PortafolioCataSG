// Función de validación
function validateForm() {
    let valid = true;

    // Referencias a los campos del formulario
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    // Validación de nombre
    if (name.value.trim() === '') {
        alert('Por favor ingrese su nombre.');
        valid = false;
    } else if (!name.value.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,50}$/)) {
        alert('Por favor ingrese un nombre válido (3-50 caracteres alfabéticos).');
        valid = false;
    }

    // Validación de correo
    if (email.value.trim() === '') {
        alert('Por favor ingrese su correo electrónico.');
        valid = false;
    } else if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        alert('Por favor ingrese un correo electrónico válido.');
        valid = false;
    }

    // Validación de asunto
    if (subject.value.trim() === '') {
        alert('Por favor ingrese el asunto.');
        valid = false;
    } else if (subject.value.length < 5 || subject.value.length > 100) {
        alert('El asunto debe tener entre 5 y 100 caracteres.');
        valid = false;
    }

    // Validación de mensaje
    if (message.value.trim() === '') {
        alert('Por favor ingrese su mensaje.');
        valid = false;
    } else if (message.value.length < 10 || message.value.length > 500) {
        alert('El mensaje debe tener entre 10 y 500 caracteres.');
        valid = false;
    }

    return valid;
}