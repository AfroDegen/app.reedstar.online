const micBtn = document.getElementById("micBtn");
const promptBox = document.getElementById("prompt");
const statusBox = document.getElementById("status");

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  statusBox.textContent =
    "Speech Recognition not supported.";
} else {

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  micBtn.addEventListener("click", () => {
    recognition.start();
  });

  recognition.onstart = () => {
    statusBox.textContent = "Listening...";
    micBtn.textContent = "🎤";
  };

  recognition.onresult = (event) => {
    const transcript =
      event.results[0][0].transcript;

    promptBox.value = transcript;
  };

  recognition.onend = () => {
    micBtn.textContent = "🎙️";
    statusBox.textContent =
      "Tap microphone to speak";
  };

  recognition.onerror = (event) => {
    micBtn.textContent = "🎙️";

    statusBox.textContent =
      "Error: " + event.error;
  };
}
