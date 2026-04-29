document.querySelectorAll(".learnmore").forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();

    const container = this.closest("div");
    const text = container.querySelector(".blogtext");

    text.classList.toggle("expanded");

    this.textContent = text.classList.contains("expanded")
      ? "READ LESS"
      : "READ MORE";
  });
});