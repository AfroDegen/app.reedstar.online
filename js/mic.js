function initMic() {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition not supported");
    return;
  }

  const recognition = new SpeechRecognition();

  const button = document.querySelector("button");
  const input = document.querySelector("input");

  button.addEventListener("click", () => {
    recognition.start();
  });

  recognition.onresult = (event) => {
    input.value = event.results[0][0].transcript;
  };
}
