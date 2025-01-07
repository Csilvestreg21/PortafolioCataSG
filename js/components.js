async function loadComponent(component, elementId) {
    const response = await fetch(`components/${component}.html`); // Usamos backticks para la plantilla literal
    if (response.ok) {
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } else {
        console.error(`Error al cargar el componente: ${component}. Status: ${response.status}`);
    }
}

window.onload = () => {
    loadComponent("about", "about-container"); // Agregamos "Acerca de mí"
    loadComponent("qualification", "qualification-container"); // Agregamos "educación"
    loadComponent("service", "service-container"); // Agregamos "experiencia"
    loadComponent("portfolio", "portfolio-container"); // Agregamos "portafolio"
    loadComponent("contact", "contact-container"); // Agregamos "contáctenos"
    loadComponent("footer", "footer-container"); // Agregamos "footer"
};
