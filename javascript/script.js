let log = document.getElementById('login')
let reg = document.getElementById('register')
let bt = document.getElementById('btn')

function register() {
    log.style.left = "-400px";
    reg.style.left = "50px";
    bt.style.left = "110px"
}

function login() {
    log.style.left = "50px";
    reg.style.left = "450px";
    bt.style.left = "0px"
}