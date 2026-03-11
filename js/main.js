document.querySelector('.hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

// close mobile nav on link click
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});
