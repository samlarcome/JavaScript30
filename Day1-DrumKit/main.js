const playSound = (e) => {
    // console.log(e.keyCode);

    // select the current key being pressed and the audio associated with it
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    // console.log(key);

    // if there is no audio, return
    if (!audio) {
        return;
    }

    audio.currentTime = 0;  // rewind to start of audio
    audio.play();           // play audio
    key.classList.add("playing");   // give audio css class of playing
}

const removeTransition = (e) => {
    // console.log(e);
    if (e.propertyName !== 'transform') {
        return;
    }
    // remove css class
    e.target.classList.remove("playing");
}

// select all of our keys
const keys = document.querySelectorAll('.key');
// assign an event listener to each key
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
})
window.addEventListener('keydown', playSound);
