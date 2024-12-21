const openFormButton = document.getElementById("openForm");
const formContainer = document.getElementById("formContainer");
const overlay = document.getElementById("overlay");

openFormButton.addEventListener("click", () => {
  formContainer.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  formContainer.classList.remove("active");
  overlay.classList.remove("active");
});


const openFormButton = document.getElementById("openForm");
const formContainer = document.getElementById("formContainer");
const overlay = document.getElementById("overlay");
const sendFormButton = document.getElementById("sendForm");

openFormButton.addEventListener("click", () => {
  formContainer.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  formContainer.classList.remove("active");
  overlay.classList.remove("active");
});

sendFormButton.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const profileUrl = document.getElementById("profileUrl").value;
  const game = document.getElementById("game").value;
  const nickname = document.getElementById("nickname").value;
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;
  const age = document.getElementById("age").value;

  if (username && profileUrl && game && nickname && country && city && age) {
    const whatsappMessage = `Hola! Aquí está la información del servidor:\n\nUsuario de ROBLOX: ${username}\nURL del perfil: ${profileUrl}\nJuego: ${game}\nNombre/apodo: ${nickname}\nPaís: ${country}\nCiudad: ${city}\nEdad: ${age}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/573136664187?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

function joinRobloxServer() {
  const robloxLink = "https://www.roblox.com/share?code=18ce2cc54fff1049be1172de256ed726&type=Server";
  window.location.href = robloxLink;

  setTimeout(() => {
    alert("No se pudo abrir Roblox. Por favor, verifica que esté instalado y que el enlace sea correcto.");
  }, 1000);
}