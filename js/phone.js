const phoneDiv = document.querySelector('.phone-view');

const screenWidth = document.body.clientWidth;

phoneDiv.style.width = screenWidth + 'px';


const tool = document.getElementById('tool');

const appBtn = document.querySelector('.download');

function controlBtn() {
  const scrollLength = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollLength > tool.offsetTop) {
    appBtn.style.opacity = '1';
    appBtn.style.pointerEvents = 'auto';
  } else {
    appBtn.style.opacity = '0';
    appBtn.style.pointerEvents = 'none';
  }
}

window.addEventListener('scroll', controlBtn, true);

