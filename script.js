// Gestion des boutons interactifs
document.querySelectorAll(".interactive-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const info = button.getAttribute("data-info");
    const display = document.getElementById("info-display");
    const card = document.getElementById("info-card");

    switch (info) {
      case "coeur":
        display.textContent =
          "Le cœur représente les courants marins qui pompent l'eau autour du globe.";
        break;
      case "poumons":
        display.textContent =
          "Les poumons symbolisent les échanges gazeux dans l'océan, notamment la photosynthèse.";
        break;
      case "peau":
        display.textContent =
          "La peau correspond à la salinité et la température de l'eau qui protègent les écosystèmes.";
        break;
      default:
        display.textContent = "Cliquez sur un élément pour en savoir plus.";
    }

    // Add the flipped class to the card to trigger the flip animation
    card.classList.add("flipped");

    // Remove the flipped class after the animation duration to reset the card
    setTimeout(() => {
      card.classList.remove("flipped");
    }, 600);
  });
});
