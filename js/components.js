async function loadComponent(component, elementId) {
    const response = await fetch(`components/${component}.html`);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
}

window.onload = () => {
    loadComponent("about", "about-container"); // Agregamos "Acerca de mí"
    loadComponent("qualification", "qualification-container"); // Agregamos "educacion"
    loadComponent("service", "service-container"); // Agregamos "experiencia"
    loadComponent("portfolio", "portfolio-container"); // Agregamos "portafolio"
    loadComponent("contact", "contact-container"); // Agregamos "contactenos"
    loadComponent("footer", "footer-container"); // Agregamos "footer"
};
