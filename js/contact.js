        // Inicializa EmailJS
        emailjs.init("EAozJeJosXMPcmSBD"); // Reemplaza con tu Public Key

        // Agrega el evento al formulario
        document.getElementById('contactForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar el envío por defecto

            // Referencias a los campos del formulario
            let name = document.getElementById('name');
            let email = document.getElementById('email');
            let subject = document.getElementById('subject');
            let message = document.getElementById('message');

            // Validaciones personalizadas
            let valid = true;

            if (!name.value.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,50}$/)) {
                alert('Por favor ingrese un nombre válido (3-50 caracteres alfabéticos).');
                valid = false;
            }

            if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                alert('Por favor ingrese un correo electrónico válido.');
                valid = false;
            }

            if (subject.value.length < 5 || subject.value.length > 100) {
                alert('El asunto debe tener entre 5 y 100 caracteres.');
                valid = false;
            }

            if (message.value.length < 10 || message.value.length > 500) {
                alert('El mensaje debe tener entre 10 y 500 caracteres.');
                valid = false;
            }

            // Si las validaciones no pasan, detener el proceso
            if (!valid) {
                document.getElementById('success-message').style.display = 'none';
                document.getElementById('error-message').style.display = 'block';
                return;
            }

            // Cambia el estado del botón para evitar múltiples envíos
            var submitButton = document.getElementById('submit-button');
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            // Enviar el formulario con EmailJS
            emailjs.sendForm('service_l5yrr42', 'template_zp5t3oy', this)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Muestra el mensaje de éxito y limpia el formulario
                    document.getElementById('success-message').style.display = 'block';
                    document.getElementById('error-message').style.display = 'none';
                    document.getElementById('contactForm').reset();

                    // Oculta el mensaje después de 3 segundos
                    setTimeout(function () {
                        document.getElementById('success-message').style.display = 'none';
                    }, 3000);
                })
                .catch(function (error) {
                    console.log('FAILED...', error);

                    // Muestra el mensaje de error
                    document.getElementById('error-message').style.display = 'block';
                    document.getElementById('success-message').style.display = 'none';
                })
                .finally(function () {
                    // Restaura el estado del botón
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar Mensaje';
                });
        });
 