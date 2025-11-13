const items = document.querySelectorAll('.list-item');
const thumbs = document.querySelectorAll('.tumb-item');
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');

let indexAtivo = 0;

function atualizarSlide(novoIndex) {
  items.forEach(item => item.classList.remove('active'));
  thumbs.forEach(thumb => thumb.classList.remove('active-thumb'));

  items[novoIndex].classList.add('active');
  thumbs[novoIndex].classList.add('active-thumb');

  indexAtivo = novoIndex;
}

nextBtn.addEventListener('click', () => {
  let novoIndex = indexAtivo + 1;
  if (novoIndex >= items.length) novoIndex = 0;
  atualizarSlide(novoIndex);
});

backBtn.addEventListener('click', () => {
  let novoIndex = indexAtivo - 1;
  if (novoIndex < 0) novoIndex = items.length - 1;
  atualizarSlide(novoIndex);
});

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => atualizarSlide(i));
});
