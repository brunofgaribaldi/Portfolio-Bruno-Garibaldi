/* funcionalidade de dark/light mode */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

/* Mensagem de agradecimento */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Aqui vamos mostrar a mensagem de agradecimento
  alert("Obrigado pela mensagem! Em breve entrarei em contato.");
});
