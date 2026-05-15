# app.js

```javascript
const intro = document.getElementById('intro');
const invite = document.getElementById('invite');

const envelopeBtn = document.getElementById('envelopeBtn');
const envelopeImg = document.getElementById('envelopeImg');

const bgm = document.getElementById('bgm');

// =========================
// MÚSICA
// =========================

function startMusic(){
  if(!bgm) return;

  bgm.volume = 0.5;

  bgm.play().catch(() => {});
}

window.addEventListener('pointerdown', startMusic, { once:true });
window.addEventListener('touchstart', startMusic, { once:true });
window.addEventListener('click', startMusic, { once:true });

// =========================
// ABRIR INVITACIÓN
// =========================

function showInvite(){
  intro.classList.remove('screen--active');
  invite.classList.add('screen--active');
}

envelopeBtn.addEventListener('click', async () => {

  envelopeImg.src = './sobre-abierto.png';

  envelopeBtn.disabled = true;

  await new Promise(resolve => setTimeout(resolve, 700));

  showInvite();

  envelopeBtn.disabled = false;
});
```

---

# ARCHIVOS NECESARIOS

Coloca estos archivos junto al proyecto:

* sobre.png
* sobre-abierto.png
* musica.mp3
* fondo-flores.jpg

Opcional:

* Puedes usar la imagen que subiste como fondo floral.

---

# ESTRUCTURA

```txt
/proyecto
  index.html
  style.css
  app.js
  musica.mp3
  sobre.png
  sobre-abierto.png
  fondo-flores.jpg
```

---

