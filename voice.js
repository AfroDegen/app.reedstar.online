async function speak(text) {

  try {

    const response = await fetch(
      "/api/speak",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          text
        })
      }
    );

    const data = await response.json();

    if (!data.audioContent) {
      return;
    }

    const audio = new Audio(
      `data:audio/mp3;base64,${data.audioContent}`
    );

    audio.play();

  } catch (error) {

    console.error(error);

  }

}
