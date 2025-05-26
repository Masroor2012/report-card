setTimeout(() => {
            let anim = document.getElementById('load-anim')
            anim.style.display = 'none'
            let contDis = document.getElementById('cont')
            contDis.style.display = 'block'
}, 1000)

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

let form = document.getElementById('form')
let user = document.getElementById('val1').value
let email = document.getElementById('val2')
let password = document.getElementById('val3')
let output = document.getElementById('output')
let error = document.getElementById('erroutput')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValue = email.value.trim
    const passwordValue = password.value
    localStorage.setItem()
    email.value = ''
    password.value = ''
})