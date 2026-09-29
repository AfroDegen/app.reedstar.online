document.addEventListener("DOMContentLoaded", () => {
  console.log("R⭐️ Beacon online");

  if (typeof initUI === "function") {
    initUI();
  }

  if (typeof initMic === "function") {
    initMic();
  }
});
