// Set the width of the progress bar dynamically
const skills = document.querySelectorAll('.skill-progress');
skills.forEach(skill => {
  const width = skill.parentNode.querySelector('.skill-percent').textContent;
  skill.style.setProperty('--progress-width', width);
});
