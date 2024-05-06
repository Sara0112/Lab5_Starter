// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  let selectHorn = document.getElementById("horn-select");
  let selectImage = document.querySelector("img");
  let selectAudio = document.querySelector("audio");

  updateImageAudio(selectHorn,selectImage,selectAudio);
  soundAndVolum(selectHorn,selectAudio);
}

function updateImageAudio(selectHorn,selectImage,selectAudio){
  selectHorn.addEventListener("change", function() {
    selectImage.src = "assets/images/" + this.value + ".svg";
    selectAudio.src = "assets/audio/" + this.value + ".mp3";
  })
}

function soundAndVolum(selectHorn,selectAudio){
  let playSound = document.querySelector("button");
  let volume = document.querySelector("input[type='range']")
  let volumeControl = document.getElementById("volume-controls").querySelector("img");
  selectAudio.volume = volume.value / 100;

  // play sound
  playSound.addEventListener("click", function(){
    selectAudio.play();
    if(selectHorn.value === "party-horn"){
      jsConfetti.addConfetti();
    }
  });

  // change volume
  volume.addEventListener("input",function(){
    selectAudio.volume = this.value / 100;
    if (this.value == 0){
      volumeControl.src = "assets/icons/volume-level-0.svg";
    } else if (this.value < 33) {
      volumeControl.src = "assets/icons/volume-level-1.svg";
    } else if (this.value < 67) {
      volumeControl.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeControl.src = "assets/icons/volume-level-3.svg";
    }
  })
}