const joinBtn = document.querySelector(".btn");
const crossBtn = document.querySelector(".fa-solid");
const backgroundCont = document.querySelector(".background-container");
const loginCont = document.querySelector(".login-container");

joinBtn.addEventListener('click', updateFile)

function updateFile() {
    backgroundCont.classList.add('active');
    loginCont.classList.remove('visible');
}

crossBtn.addEventListener('click', removeFile)

function removeFile() {
    backgroundCont.classList.remove('active');
    loginCont.classList.add('visible')
}