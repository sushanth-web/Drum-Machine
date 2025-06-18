const pads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');
const str= "qweasdzxc"
const arr=str.split("")

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

document.addEventListener("keydown", function(event) {
  const key = event.key.toUpperCase();
  if (keys.includes(key)) {
    const button = document.getElementById(key);
    if (button) button.click();
  }
});


pads.forEach(pad => {
  pad.addEventListener('click', () => {
    const soundName = pad.getAttribute('data-sound');
    display.textContent = soundName

    const audio = pad.querySelector('audio');
    if (audio) {
      audio.play();
    }
  });
});
