let countdown;
const timeLeftInfo = document.querySelector('.display__time-left');
const endTimeInfo = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes < 10 ? "0" + minutes : minutes}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`;
    timeLeftInfo.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTimeInfo.textContent = `Be back at ${hour < 10 ? "0" + hour : hour} : ${minutes < 10 ? "0" + minutes : minutes}`;
}

function startTimer() {
    timer(this.dataset.time);
}

function customTime(e) {
    e.preventDefault();
    const time = parseInt(this.minutes.value);
    if (isNaN(time)) {
        alert('Please use numbers');
        this.reset();
    } else {
        timer(time * 60)
        this.reset();
    }
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', customTime);

console.log(`%c------- J S -- C O D E --------------------------------------`,`color:yellow`);
console.log(`let countdown;
const timeLeftInfo = document.querySelector('.display__time-left');
const endTimeInfo = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = $ {minutes < 10 ? "0" + minutes : minutes}:$ {remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds};
    timeLeftInfo.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTimeInfo.textContent = Be back at $ {hour < 10 ? "0" + hour : hour} : $ {minutes < 10 ? "0" + minutes : minutes};
}

function startTimer() {
    timer(this.dataset.time);
}

function customTime(e) {
    e.preventDefault();
    const time = parseInt(this.minutes.value);
    if (isNaN(time)) {
        alert('Please use numbers');
        this.reset();
    } else {
        timer(time * 60)
        this.reset();
    }
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', customTime);`)
