const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    const date = new Date();

    const seconds = date.getSeconds();
    const secondHandDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondHandDegree}deg)`;
    
    const minutes = date.getMinutes();
    const minHandDegree = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minHandDegree}deg)`;

    const hour = date.getHours();
    const hourHandDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourHandDegree}deg)`;
}

setInterval(setDate, 1000);