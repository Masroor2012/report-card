//loading animation
setTimeout(() => {
    let anim = document.getElementById('load-anim')
    anim.style.display = 'none'
}, 5000)


// data
let valA = document.getElementById('grade1val').value
let valB = document.getElementById('grade2val').value
let valC = document.getElementById('grade3val').value
let valD = document.getElementById('grade4val').value
let valF = document.getElementById('grade5val').value

//pop display
function set(){
    document.getElementById('output').style.display='block'
}