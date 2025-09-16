// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData= [
  { text: "if you ever find yourself stuck in the", time: 3 },
  { text: "middle of the sea", time: 5 },
  { text: "i'll sell the world to find you if you", time: 8 },
  { text: "ever find yourself lost in the dark and", time: 14 },
  { text: "you can't see", time: 16 },
  { text: "i'll be the light to guide you", time: 19 },
  { text: "find out what we're made of", time: 25 },
  { text: "what we are called to help our friends", time: 29 },
  { text: "in need", time: 32},
  { text: "you can't count on me like", time: 35 },
  { text: "one two three i'll be there", time: 38 },
  { text: "and i know when i need it i can count on", time: 42 },
  { text: "you like four three two and you'll be", time: 47 },
  { text: "there cause that's what friends are", time: 51 },
  { text: "supposed to", time: 55 },
  { text: "do all year", time: 56 },
  { text: "if you're tossing and you're turning and", time: 67 },
  { text: "you just can't fall asleep", time: 68 },
  { text: "i'll sing a song beside you", time: 73 },
  { text: "and if you ever forget how much you", time: 78 },
  { text: "really mean to me", time: 80 },
  { text: "i", time: 109 },
  { text: "cause that's what friends are supposed", time: 119 },
  { text: "to do", time: 121 },
  { text: "you'll always have my", time: 132 },
  { text: "shoulder when you try", time: 136 },
  { text: "i'll never let go", time: 143 },
  { text: "never say goodbye", time: 146 },
  { text: "[Music]", time: 153 },
  { text: "and i know when i need it i can count on", time: 162 },
  { text: "you", time: 166 },
  { text: "cause that's what friends are supposed", time: 174 },
  { text: "to do oh yeah", time: 175 },
  { text: "you can count on me cause i can't count", time: 185 },
  { text: "on you", time: 186 }
];
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);