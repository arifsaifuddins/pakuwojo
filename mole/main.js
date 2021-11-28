// opening

const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');
const opening = document.querySelector('.opening');
const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const display = document.querySelector('.display');


easy.addEventListener('click', function () {
  opening.classList.add('open');
  nav.classList.add('show-nav');
  display.style.display = 'flex';
  level = 1500;
  playMole();
});

medium.addEventListener('click', function () {
  opening.classList.add('open');
  nav.classList.add('show-nav');
  display.style.display = 'flex';
  level = 1000;
  playMole();
});

hard.addEventListener('click', function () {
  opening.classList.add('open');
  nav.classList.add('show-nav');
  display.style.display = 'flex';
  level = 700;
  playMole();
});


function playMole() {
  const hills = document.querySelectorAll('.hill');
  const mole = document.querySelectorAll('.mole');
  const scors = document.querySelector('.scor');

  let interval;
  let timeout;
  let scor = 0;
  document.querySelector('.play')
    .addEventListener('click', function () {
      document.querySelector('.selesai')
        .innerHTML = '';
      clearInterval(interval);
      interval = setInterval(() => {
        showMoleRandom();
      }, 1000);
      timeout = setTimeout(() => {
        clearInterval(interval);
        scor = 0;
        document.querySelector('.selesai')
          .innerHTML = 'Game End...';
      }, 120000);
    });

  document.querySelector('.pause')
    .addEventListener('click', function () {
      clearInterval(interval);
    });

  document.querySelector('.restart')
    .addEventListener('click', function () {
      clearInterval(interval);
      clearTimeout(timeout);
      scor = 0;
      scors.innerHTML = scor;
    })

  function hillRandom(hills) {
    const h = Math.floor(Math.random() * hills.length);
    const hRandom = hills[h];
    let hillBefore;
    if (hRandom == hillBefore) {
      hillRandom();
      hillBefore = hRandom;
    }
    return hRandom;
  }

  function showMoleRandom() {
    let mRandom = hillRandom(hills);
    mRandom.classList.add('show');
    setTimeout(() => {
      mRandom.classList.remove('show');
    }, level);
  }

  function scorMole() {
    scor++;
    scors.innerHTML = scor;
  }

  mole.forEach(m => {
    m.addEventListener('click', function () {
      document.querySelector('audio').play();
      scorMole();
      scors.innerHTML = scor;
    });
  });

  burger.addEventListener('click', function () {
    clearInterval(interval);
    clearTimeout(timeout);
    opening.classList.remove('open');
    setTimeout(function () {
      display.style.display = 'none';
    }, 1000);
  });
}