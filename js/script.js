var first = document.querySelector('.first-page');
var second = document.querySelector('.video');
var video = document.querySelector('video');

function change() {
    first.style = 'display: none;';
    second.classList.remove('hidden')
    video.play()
}