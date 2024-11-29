
const options = document.querySelectorAll('.option');
options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => {
      opt.classList.remove('selected');
      opt.querySelector('.details').classList.add('minimal');
    });
    option.classList.add('selected');
    option.querySelector('.details').classList.remove('minimal');
  });
});
