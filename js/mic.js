window.addEventListener("DOMContentLoaded", () => {

  const micBtn =
    document.getElementById("micBtn");

  if (!micBtn) {
    alert("micBtn not found");
    return;
  }

  micBtn.addEventListener("click", () => {
    alert("Mic button clicked");
  });

});
