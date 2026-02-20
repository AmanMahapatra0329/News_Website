window.addEventListener("scroll", function () {

  const header = document.getElementById("header");
  const backToTop = document.getElementById("backToTop");

  header.classList.toggle("scrolled", window.scrollY > 50);
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";

});

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
});

document.getElementById("backToTop")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

document.getElementById("year")
  .textContent = new Date().getFullYear();