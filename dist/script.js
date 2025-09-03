const playBtn = document.getElementById("play-btn");
const audio = document.getElementById("audio");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸"; // cambia icono a pausa
  } else {
    audio.pause();
    playBtn.textContent = "▶"; // cambia icono a play
  }
});