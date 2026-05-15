
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
