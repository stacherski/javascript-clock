setInterval(setClock, 1000);

const secondsHand = document.querySelector('[data-hand-seconds]')
const minutesHand = document.querySelector('[data-hand-minutes]')
const hoursHand = document.querySelector('[data-hand-hours]')

function setClock(){
    const currentDate = new Date();
    const rotateSecondsHandBy = currentDate.getSeconds() / 60;
    const rotateMinutesHandBy = (rotateSecondsHandBy + currentDate.getMinutes()) / 60;
    const rotateHoursHandBy = (rotateMinutesHandBy + currentDate.getHours()) / 12;
    setRotation(secondsHand,rotateSecondsHandBy);
    setRotation(hoursHand,rotateHoursHandBy);
    setRotation(minutesHand,rotateMinutesHandBy);
}

function setRotation(element, rotation){
    element.style.setProperty('--rotation', rotation * 360);
}

setClock();