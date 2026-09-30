async function sendToBeacon(question) {

  const chat =
    document.getElementById("chat");

  const user =
    document.createElement("div");

  user.className = "message user";
  user.textContent = question;

  chat.appendChild(user);

  const beacon =
    document.createElement("div");

  beacon.className = "message beacon";
  beacon.textContent = "Thinking...";

  chat.appendChild(beacon);

  chat.scrollTop = chat.scrollHeight;

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

    beacon.textContent =
      data.answer ||
      "No response received.";

  } catch (error) {

    console.error(error);

    beacon.textContent =
      "Beacon encountered an error.";

  }

  chat.scrollTop = chat.scrollHeight;
}
