const openBox = document.querySelector(".search-box");
const btn = document.querySelector(".search-btn");

btn.addEventListener("click", function () {
  openBox.classList.toggle("open");
});
