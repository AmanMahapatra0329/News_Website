const slides = document.querySelectorAll(".slide");
const headline = document.getElementById("headline");
const description = document.getElementById("description");
const dotsContainer = document.querySelector(".dots");
const progressBar = document.querySelector(".progress");

let current = 0;
let interval = 7000;
let timer;

slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if(i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function updateContent(index){
  headline.textContent = slides[index].dataset.title;
  description.textContent = slides[index].dataset.desc;
  document.querySelector(".hero-content").classList.remove("show");
  setTimeout(() => {
    document.querySelector(".hero-content").classList.add("show");
  },100);
}

function goToSlide(index){
  slides[current].classList.remove("active");
  dotsContainer.children[current].classList.remove("active");
  current = index;
  slides[current].classList.add("active");
  dotsContainer.children[current].classList.add("active");
  updateContent(current);
  restartTimer();
}

function nextSlide(){
  goToSlide((current+1)%slides.length);
}

function restartTimer(){
  clearInterval(timer);
  timer = setInterval(nextSlide, interval);
  animateProgress();
}

function animateProgress(){
  const bar = progressBar.querySelector("::after");
}
const articlesBtn = document.getElementById("articlesBtn");
const videosBtn = document.getElementById("videosBtn");

articlesBtn.addEventListener("click", ()=>{
  articlesBtn.classList.add("active");
  videosBtn.classList.remove("active");
});

videosBtn.addEventListener("click", ()=>{
  videosBtn.classList.add("active");
  articlesBtn.classList.remove("active");
});

updateContent(0);
restartTimer();