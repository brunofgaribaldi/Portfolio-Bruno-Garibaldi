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

/* Integração com ViaCEP */

const cepInput = document.getElementById("cep");
const cidadeInput = document.getElementById("cidade");
const estadoInput = document.getElementById("estado");

cepInput.addEventListener("blur", () => {
  const cepLimpo = cepInput.value.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    return;
  }

  fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        alert("CEP não encontrado. Verifique e tente novamente.");
        cidadeInput.value = "";
        estadoInput.value = "";
        return;
      }

      cidadeInput.value = data.localidade;
      estadoInput.value = data.uf;
    })
    .catch((error) => {
      console.error("Erro ao buscar CEP:", error);
      alert("Erro ao buscar o CEP. Tente novamente.");
    });
});
