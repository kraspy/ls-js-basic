// Slider
const btnLeft = document.querySelector('#slide-left');
const btnRight = document.querySelector('#slide-right');
const slider = document.querySelector('.slider__items');
const MIN_SLIDER_POS = 0;
const MAX_SLIDER_POS = 500;

//Modal
const modal = document.querySelector('#modal');
const btnModal = document.querySelector('#showModalBtn');

function toggleSlide(direction) {
  let curPos = parseInt(getComputedStyle(slider).right);
  if (curPos <=MIN_SLIDER_POS && direction === 'left') {
    curPos = MAX_SLIDER_POS + 100;
  } else if (curPos >= MAX_SLIDER_POS && direction === 'right') {
    curPos = MIN_SLIDER_POS - 100;
  }
  if (direction === 'left') {
    var newPos = curPos - 100 + 'px';
  } else if (direction === 'right' ) {
    var newPos = curPos + 100 + 'px';
  }
  slider.style.right = newPos;
}

btnLeft.addEventListener('click', () => {
  toggleSlide('left');
})

btnRight.addEventListener('click', () => {
  toggleSlide('right');
})

function showModal() {
  const modal = document.querySelector('#modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.querySelector('#modal');
  modal.style.display = 'none';
}

btnModal.addEventListener('click', showModal);

modal.addEventListener('click', (event) => {
  closeModal();
})