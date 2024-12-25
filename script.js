const modebtn = document.querySelector("#togglebtn");
const body = document.querySelector("body");

let currentMode = 'light';

modebtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.src = 'moon.png';
        btnpara.innerText = "Dark Mode";        
        body.classList.remove('light-mode');
    } else {
        icon.src = 'sun.png';
        btnpara.innerText = "Light Mode";
        body.classList.add('light-mode');
    }
});