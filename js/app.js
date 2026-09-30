document.addEventListener(
  "DOMContentLoaded",
  () => {

    const input =
      document.getElementById("prompt");

    input.addEventListener(
      "keydown",
      async (event) => {

        if(event.key !== "Enter"){
          return;
        }

        const question =
          input.value.trim();

        if(!question){
          return;
        }

        input.value = "";

        await sendToBeacon(question);

      }
    );

  }
);
