const closeBtn = document.getElementById('close-btn');
const popupOverlay = document.querySelector('.popup-overlay');

window.addEventListener('load', () => {
  popupOverlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});




const cards = document.querySelectorAll('.card');
const body = document.body;
const header = document.querySelector('.header');
let intervalId;
let colorIndex = 0;
let titleColorIndex = 0;
const colors = ["#FFDAB9", "#F08080", "#90EE90", "#ADD8E6", "#D3D3D3"];
const titleColors = ["#fff",'#000',"#ff0000", "#00ff00", "#0000ff", "#f0f000"];

cards.forEach(card => {

  card.addEventListener('mouseover', () => {
    intervalId = setInterval(() => {
      changeColor(card);
      changeScale(card);
    }, 100);
  });

  card.addEventListener('mouseout', () => {
    clearInterval(intervalId);
    colorIndex = 0;
    card.style.backgroundColor = colors[colorIndex];
    card.style.transform = 'scale(1)';
  });

  function changeColor(card) {
    card.style.backgroundColor = colors[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) {
      colorIndex = 0;
    }
  }

  function changeScale(card) {
    const randomScale = Math.random() * (1.5 - 0.5) + 0.5; 
    card.style.transform = `scale(${randomScale})`;
  }

  setInterval(() => {
    changeBodyColor();
    changeTitleColor();
  }, 500);

  function changeBodyColor() {
    body.style.transition = 'background-color 0.5s ease-in-out';
    body.style.backgroundColor = colors[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) {
      colorIndex = 0;
    }
  }
  
  function changeTitleColor() {
    header.style.transition = 'color 0.5s ease-in-out';
    header.style.color = titleColors[titleColorIndex];
    titleColorIndex++;
    if (titleColorIndex >= titleColors.length) {
      titleColorIndex = 0;
    }
  }

});




const img = document.querySelector('img');

const yPos = (window.innerHeight / 2) - (img.height / 2);
let direction = 1; 
let newPos = yPos; 

function animate() {
  newPos += (direction * 2);
  img.style.top = newPos + 'px';

  if (newPos <= yPos - 30 || newPos >= yPos + 30) {
    direction *= -1;
  }

  requestAnimationFrame(animate); 
}


requestAnimationFrame(animate);

