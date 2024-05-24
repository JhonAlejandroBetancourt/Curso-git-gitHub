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
document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.getElementById("chat-button");
    const chatWindow = document.getElementById("chat-window");
    const chatClose = document.getElementById("chat-close");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    chatButton.addEventListener("click", () => {
        chatWindow.classList.toggle("open");
    });

    chatClose.addEventListener("click", () => {
        chatWindow.classList.remove("open");
    });

    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage("user", userMessage);
            chatInput.value = "";
            setTimeout(() => {
                addMessage("bot", getBotResponse(userMessage));
            }, 1000);
        }
    });

    function addMessage(sender, text) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", sender);
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(message) {
        // Simple predefined responses
        const responses = {
            "hola": "¡Hola! ¿Cómo puedo ayudarte hoy?",
            "curso": "Ofrecemos un curso de Git que cubre desde lo básico hasta temas avanzados.",
            "inscripción": "Para inscribirte, completa el formulario de inscripción en la sección correspondiente.",
            "adiós": "¡Adiós! Espero haberte ayudado.",
            "gracias": "¡De nada! Estoy aquí para ayudarte."
        };
        return responses[message.toLowerCase()] || "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?";
    }
});
