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


const posts = document.querySelectorAll("#postslist article");
const buttons = document.querySelectorAll(".pagingbtn");

const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

const postsPerPage = 2;
const totalPages = Math.ceil(posts.length / postsPerPage);

let currentPage = 1;

function showPage(page) {
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;

  posts.forEach((post, index) => {
    if (index >= start && index < end) {
      post.style.display = "grid";
    } else {
      post.style.display = "none";
    }
  });
}

function updateActiveButton() {
  buttons.forEach(btn => btn.classList.remove("active"));
  buttons[currentPage - 1].classList.add("active");
}

showPage(currentPage);

buttons.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    currentPage = index + 1;
    showPage(currentPage);
    updateActiveButton();

    document.querySelector("#postslist").scrollIntoView({
      behavior: "smooth"
    });
  });
});

prevBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
    updateActiveButton();

    document.querySelector("#postslist").scrollIntoView({
      behavior: "smooth"
    });
  }
});

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
    updateActiveButton();

    document.querySelector("#postslist").scrollIntoView({
      behavior: "smooth"
    });
  }
});