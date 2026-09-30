const promptInput =
  document.getElementById("prompt");

const chat =
  document.getElementById("chat");

promptInput.addEventListener(
  "keydown",
  async (event) => {

    if (event.key !== "Enter") {
      return;
    }

    const question =
      promptInput.value.trim();

    if (!question) {
      return;
    }

    promptInput.value = "";

    const userMessage =
      document.createElement("div");

    userMessage.className =
      "message user";

    userMessage.textContent =
      question;

    chat.appendChild(userMessage);

    const beaconMessage =
      document.createElement("div");

    beaconMessage.className =
      "message beacon";

    beaconMessage.textContent =
      "Thinking...";

    chat.appendChild(beaconMessage);

    chat.scrollTop =
      chat.scrollHeight;

    try {

      const response =
        await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: question
          })
        });

      const data =
        await response.json();

      beaconMessage.textContent =
        data.answer ||
        "No response generated.";

    } catch (error) {

      console.error(error);

      beaconMessage.textContent =
        "Beacon encountered an error.";

    }

    chat.scrollTop =
      chat.scrollHeight;
  }
);
