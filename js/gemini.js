const promptInput =
  document.getElementById("prompt");

const sendBtn =
  document.getElementById("sendBtn");

const chat =
  document.getElementById("chat");

function updateButton() {

  if (promptInput.value.trim().length > 0) {
    actionBtn.classList.add("show-send");
  } else {
    actionBtn.classList.remove("show-send");
  }
}

promptInput.addEventListener(
  "input",
  updateButton
);

actionBtn.addEventListener(
  "click",
  async () => {

    const question =
      promptInput.value.trim();

    if (!question) {
      return;
    }

    promptInput.value = "";

    updateButton();

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
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            message:question
          })
        });

      const data =
        await response.json();

      beaconMessage.textContent =
        data.answer ||
        "No response generated.";

    } catch(error){

      beaconMessage.textContent =
        "Beacon encountered an error.";
    }

    chat.scrollTop =
      chat.scrollHeight;
  }
);

promptInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {
      sendBtn.click();

    }

  }
);
