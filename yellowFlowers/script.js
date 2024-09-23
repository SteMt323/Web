window.onload = () => {
    const startButton = document.getElementById("start-button");
    const introScreen = document.getElementById("intro-screen");
  
    startButton.addEventListener("click", () => {
      introScreen.style.display = "none";
      document.body.classList.remove("container");
    });
  };
  