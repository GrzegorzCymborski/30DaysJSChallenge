const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullScreenBtn = player.querySelector('.fullscreen')

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    icon = this.paused ? "▶️" : "⏸️";
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function scrub(e) {
    const scrub = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrub;
}

function handleRangeUpdate() {
    video[this.name] = this.value
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function toggleFullscreen() {
    player.requestFullscreen();
    document.fullscreenEnabled ? document.exitFullscreen() : null
}

skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
fullScreenBtn.addEventListener('click', toggleFullscreen)

let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', (e) => mousedown = true)
progress.addEventListener('mouseup', (e) => mousedown = false)

document.onkeydown = (e) => {
    if (e.keyCode == 32) {
        togglePlay();
    }
}

///////////////////////////////////////////////////////////////////////////////////////
console.log(`%c------- J S -- C O D E --------------------------------------`, `color:yellow`);
console.log(`const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullScreenBtn = player.querySelector('.fullscreen')

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    icon = this.paused ? "▶️" : "⏸️";
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function scrub(e){
const scrub = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrub;    
}

function handleRangeUpdate() {
   video[this.name] = this.value
}

function handleProgress(){
const percent = (video.currentTime / video.duration) * 100;
progressBar.style.flexBasis = $ {percent}%;
}

function toggleFullscreen(){
    video.requestFullscreen()   
}

skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
fullScreenBtn.addEventListener('click',toggleFullscreen)

let mousedown = false;
progress.addEventListener('click',scrub)
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e))
progress.addEventListener('mousedown',(e)=> mousedown = true)
progress.addEventListener('mouseup',(e)=> mousedown = false)`);

