
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

function createFlowerBurst(){

  const container = document.getElementById('flowerBurst');

  if(!container) return;

  const flowers = ['🌸','🌼','🌺','🌷'];

  for(let i=0;i<45;i++){

    const flower = document.createElement('div');

    flower.className = 'flowerParticle';

    flower.textContent =
      flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + 'vw';

    flower.style.animationDuration =
      (4 + Math.random() * 3) + 's';

    flower.style.fontSize =
      (22 + Math.random() * 26) + 'px';

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    },7000);
  }
}
envelopeBtn.addEventListener('click', async () => {

  envelopeImg.src = './sobre-abierto.png';

  envelopeBtn.disabled = true;

  await new Promise(resolve => setTimeout(resolve, 700));
  
  createFlowerBurst();

  showInvite();

  envelopeBtn.disabled = false;
});
