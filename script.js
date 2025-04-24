function mostrarMensaje() {
  const msg = document.getElementById("mensaje");
  msg.style.display = "block";
}

function responder() {
  alert("¡Ahhh! Esto me hace muy muy muy muy feliz 😍, no lo olvides Si");
}

// Animación de corazones flotando
const container = document.getElementById('corazones');
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'corazon';
  heart.innerText = '💗';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 2) + 's';
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 500);
