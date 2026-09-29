let inputBox;
let micButton;

function initUI() {
  inputBox = document.querySelector("input");
  micButton = document.querySelector("button");
}

function showListening() {
  micButton.textContent = "🎤";
}

function showIdle() {
  micButton.textContent = "🎙️";
}

function showTranscript(text) {
  inputBox.value = text;
}
