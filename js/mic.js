const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

if(SpeechRecognition){

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-US";

  window.addEventListener(
    "DOMContentLoaded",
    () => {

      const micBtn =
        document.getElementById("micBtn");

      const prompt =
        document.getElementById("prompt");

      const status =
        document.getElementById("status");

      micBtn.addEventListener(
        "click",
        () => recognition.start()
      );

      recognition.onstart = () => {
        status.textContent =
          "Listening...";
      };

      recognition.onresult =
        (event) => {

          prompt.value =
            event.results[0][0].transcript;

        };

      recognition.onend = () => {
        status.textContent =
          "Beacon Online";
      };

      recognition.onerror = (e) => {
        status.textContent =
          "Speech Error: " + e.error;
      };

    }
  );

}
