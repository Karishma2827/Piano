const keys = document.querySelectorAll(".key");
const keyboardKeys = [
  "d",
  "r",
  "f",
  "t",
  "g",
  "h",
  "u",
  "j",
  "i",
  "k",
  "o",
  "l",
];

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", () => play(keys[i]));
}
function play(key) {
  const audio = document.getElementById(key.dataset.note);

  audio.currentTime = 0;

  audio.play();

  key.classList.add("key-active");

  audio.addEventListener("ended", () => {
    key.classList.remove("key-active");
  });
}

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;

  const key = e.key;

  const keyIndex = keyboardKeys.indexOf(key);

  if (keyIndex > -1) play(key[keyIndex]);
});
