setTimeout(() => {
            let anim = document.getElementById('load-anim')
            anim.style.display = 'none'
}, 5000)

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    let user = document.getElementById('val1').value
    let email = document.getElementById('val2').value
    let password = document.getElementById('val3').value
    let output = document.getElementById('output')
    let error = document.getElementById('erroutput')
    if(password == "masrooristhesmartestboyontheplanetearth"){
        output.style.display = 'block'
        output.innerHTML = `<h1 class="welTxt">Welcome ${user}</h1><br> <a href="start.html"><button class="sub">Start</button></a>`
    }else{
        error.style.display = 'block'
        error.innerHTML = `<h1 class="errTxt">Incorrect password </h1><button class="sub" onclick="document.getElementById('erroutput').style.display = 'none'">Try again</button>`
    }
    email = ''
    password = ''
})