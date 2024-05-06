// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynthesis = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const textToSpeak = document.getElementById("text-to-speak");

  speechSynthesis.addEventListener("voiceschanged", function() {
    let voiceList = speechSynthesis.getVoices();
    voiceList.forEach((voice) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });
  });
  textToSpeak.addEventListener("input", function () {
    textToSpeak.textContent = this.value;
  })
  talk(speechSynthesis,voiceSelect,textToSpeak);
}

function talk(speechSynthesis, voiceSelect, textToSpeak) {
  const pressButton = document.querySelector("button");
  pressButton.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    let voiceList1 = speechSynthesis.getVoices();
    voiceList1.forEach((voice) => {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    });
    const face = document.querySelector("img");
    utterThis.addEventListener("start", (event) => {
      face.src = "assets/images/smiling-open.png";
    });
    utterThis.addEventListener("end", (event) => {
      face.src = "assets/images/smiling.png";
    });
    speechSynthesis.speak(utterThis);
  });
}
