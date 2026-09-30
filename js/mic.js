const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

if(SpeechRecognition){

  const recognition =
    new SpeechRecognition();

  recognition.lang="en-US";

  window.addEventListener(
    "DOMContentLoaded",
    () => {

      const input =
        document.getElementById("prompt");

      const mic =
        document.getElementById("micBtn");

      mic.addEventListener(
        "click",
        () => {
          recognition.start();
        }
      );

      recognition.onresult =
        (event) => {

          input.value =
            event.results[0][0].transcript;

        };

    }
  );

}
