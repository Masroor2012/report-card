setTimeout(() => {
    let anim = document.getElementById('load-anim')
    anim.style.display = 'none'
}, 10000)

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
