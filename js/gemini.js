async function sendToBeacon(question) {

  const chat =
    document.getElementById("chat");

  // User message
  const userMessage =
    document.createElement("div");

  userMessage.className =
    "message";

  userMessage.textContent =
    question;

  chat.appendChild(userMessage);

  // Beacon placeholder
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
      await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            message: question
          })
        }
      );

    const data =
      await response.json();

    const answer =
      data.answer ||
      "No response generated.";

    beaconMessage.textContent =
      answer;

    chat.scrollTop =
      chat.scrollHeight;

    // Voice output
    if (typeof speak === "function") {
      await speak(answer);
    }

  } catch (error) {

    console.error(error);

    beaconMessage.textContent =
      "Beacon encountered an error.";

  }

}
