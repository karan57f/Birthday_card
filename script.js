function showMessage() {
  const surprise = "💖 Surprise Message 💖\n\nDear Motu Ji,\n\nYou're the best dad in the world! Thank you for everything you do. Wishing you a day full of happiness and a year full of blessings.\n\nLove from your son, Karanveer Singh ❤️";

  alert(surprise);
  document.getElementById("message").innerText = "🎁 Secret message delivered!";
}

// Autoplay music on first user interaction
function enableAutoMusic() {
  const audio = document.getElementById("birthdayMusic");
  audio.play().catch(() => {
    console.log("Autoplay blocked, trying again after interaction.");
  });

  document.removeEventListener("click", enableAutoMusic);
  document.removeEventListener("touchstart", enableAutoMusic);
}

document.addEventListener("click", enableAutoMusic);
document.addEventListener("touchstart", enableAutoMusic);

// Optional: notify the user to tap once
window.onload = function() {
  alert("🎵 Tap anywhere to hear the birthday music!");
};