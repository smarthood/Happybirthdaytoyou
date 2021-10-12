let shown = document.getElementById("text");
let fname = prompt("Enter the Bithday person name");
let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let audio = document.querySelector('#audio');
btn.onclick = function(){
    body.classList.toggle('on');
    shown.innerText = fname;
    audio.play();
}