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


const posts = document.querySelectorAll("main section article");
const buttons = document.querySelectorAll(".pagingbtn");

const postsPerPage = 2;

function showPage(page) {
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;

  posts.forEach((post, index) => {
    if (index >= start && index < end) {
      post.style.display = "grid"; // your layout uses grid
    } else {
      post.style.display = "none";
    }
  });
}
showPage(1);

buttons.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    buttons.forEach(b => b.classList.remove("active"));

    this.classList.add("active");

    showPage(index + 1);

    document.querySelector("main section").scrollIntoView({behavior: "smooth"});
  });
});