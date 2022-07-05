const scroll = document.querySelector(".scroll");

window.addEventListener("scroll", () => {
  scroll.classList.toggle("active", window.scrollY > 800);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scroll.addEventListener("click", () => {
  scrollToTop();
});