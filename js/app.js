const sendBtn =
  document.getElementById("sendBtn");

sendBtn.addEventListener(
  "click",
  async () => {

    const question =
      input.value.trim();

    if (!question) return;

    input.value = "";

    await sendToBeacon(question);

  }
);
