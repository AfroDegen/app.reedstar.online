async function sendToBeacon(question) {

  const chat =
    document.getElementById("chat");

  const userMessage =
    document.createElement("div");

  userMessage.className =
    "message";

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
      data.answer;

  } catch (error) {

    console.error(error);

    beaconMessage.textContent =
      "Beacon encountered an error.";

  }

  chat.scrollTop =
    chat.scrollHeight;
}
