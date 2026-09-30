const micBtn =
  document.getElementById("micBtn");

const promptInput =
  document.getElementById("prompt");

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

if (!SpeechRecognition) {

  console.log(
    "Speech recognition not supported."
  );

} else {

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-US";

  recognition.continuous = false;

  recognition.interimResults = false;

  micBtn.addEventListener(
    "click",
    () => {

      recognition.start();

    }
  );

  recognition.onstart = () => {

    micBtn.style.opacity = "0.5";

  };

  recognition.onresult = (event) => {

    const transcript =
      event.results[0][0].transcript;

    promptInput.value =
      transcript;

    promptInput.focus();

  };

  recognition.onend = () => {

    micBtn.style.opacity = "1";

  };

  recognition.onerror = (event) => {

    console.log(
      "Speech Error:",
      event.error
    );

    micBtn.style.opacity = "1";

  };

}
