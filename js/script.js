document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Notification when reaching the inscription section
    const inscriptionSection = document.getElementById("inscripcion");
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = "¡Inscríbete en nuestro curso de Git ahora!";
    document.body.appendChild(notification);

    window.addEventListener("scroll", () => {
        const rect = inscriptionSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            notification.classList.add("show");
        } else {
            notification.classList.remove("show");
        }
    });
});
