window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.background = window.scrollY > 50 ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.9)';
});
