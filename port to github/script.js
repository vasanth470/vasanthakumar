document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".dynamic-card");

  // Handle Project Sorting and Filtering Interface Actions
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active style from previous selections
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectionValue = button.getAttribute("data-filter");

      // Evaluate mapping classes across card targets
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (selectionValue === "all" || cardCategory === selectionValue) {
          card.style.display = "flex";
          // Minor opacity delay for smoother entry transitions
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          // Enforce structural extraction from flow container
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
});
