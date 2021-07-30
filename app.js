const download = document.querySelector(`.resume`);
const version = document.querySelector(`.resume-btn`);

download.addEventListener('click', () => {
  version.classList.toggle('visible');
});
