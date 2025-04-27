const audio = document.getElementById("myAudio");
const enableSoundBtn = document.getElementById("enableSoundBtn");

window.addEventListener('load', () => {
    audio.play().catch(e => console.log('Autoplay blocked'));
});
let soundEnabled = false;

enableSoundBtn.addEventListener('click', function () {
    if (!soundEnabled) {
        audio.muted = false;
        audio.volume = 0.5;
        // enableSoundBtn.style.opacity = '0.5';
        enableSoundBtn.innerHTML = '🔇';
    } else {
        audio.muted = true;
        enableSoundBtn.style.opacity = '1';
        enableSoundBtn.innerHTML = '🎵';
    }
    soundEnabled = !soundEnabled;
});