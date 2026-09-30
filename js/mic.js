window.addEventListener("DOMContentLoaded", () => {

  const micBtn =
    document.getElementById("micBtn");

  const promptInput =
    document.getElementById("prompt");

  if (!micBtn) {
    alert("micBtn not found");
    return;
  }

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {

    alert(
      "Speech Recognition is not supported on this browser."
    );

    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  micBtn.addEventListener("click", () => {

    alert("Starting recognition");

    try {

      recognition.start();

    } catch (error) {

      alert(
        "Start Error: " + error.message
      );

      console.log(error);
    }

  });

  recognition.onstart = () => {

    alert("Recognition started");

    micBtn.style.opacity = "0.5";

  };

  recognition.onresult = (event) => {

    const transcript =
      event.results[0][0].transcript;

    promptInput.value =
      transcript;

    promptInput.focus();

    micBtn.style.opacity = "1";

    alert(
      "Transcript: " + transcript
    );

  };

  recognition.onend = () => {

    micBtn.style.opacity = "1";

    console.log(
      "Recognition ended"
    );

  };

  recognition.onerror = (event) => {

    micBtn.style.opacity = "1";

    alert(
      "Speech Error: " + event.error
    );

    console.log(
      "Speech Error:",
      event.error
    );

  };

});
