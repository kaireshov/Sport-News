const readMoreBtn = document.getElementById('read-more-btn');
const extraContent = document.getElementById('extra-content');

readMoreBtn.addEventListener('click', () => {
  if (extraContent.style.display === 'none') {
    extraContent.style.display = 'block';
    readMoreBtn.textContent = 'Показать меньше';
  } else {
    extraContent.style.display = 'none';
    readMoreBtn.textContent = 'Показать больше';
  }
});
