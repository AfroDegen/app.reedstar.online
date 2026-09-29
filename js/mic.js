function initMic() {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.log("Speech recognition not supported");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  micButton.addEventListener("click", () => {
    recognition.start();
  });

  recognition.onstart = () => {
    showListening();
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    showTranscript(transcript);
  };

  recognition.onend = () => {
    showIdle();
  };

  recognition.onerror = () => {
    showIdle();
  };
}

