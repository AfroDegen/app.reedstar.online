document.addEventListener(
  "DOMContentLoaded",
  () => {

    const askBtn =
      document.getElementById("askBtn");

    const prompt =
      document.getElementById("prompt");

    const response =
      document.getElementById("response");

    const status =
      document.getElementById("status");

    askBtn.addEventListener(
      "click",
      async () => {

        const question =
          prompt.value.trim();

        if(!question){
          return;
        }

        status.textContent =
          "Beacon is thinking...";

        response.textContent =
          "Generating response...";

        const answer =
          await askGemini(question);

        response.textContent =
          answer;

        status.textContent =
          "Beacon Online";
      }
    );

  }
);
