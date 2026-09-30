window.addEventListener("DOMContentLoaded", () => {

  const micBtn =
    document.getElementById("micBtn");

  if (!micBtn) {
    alert("micBtn not found");
    return;
  }

  micBtn.addEventListener("click", () => {

  alert("Starting recognition");

  try {

    recognition.start();

  } catch (error) {

    alert(error.message);

  }

});
