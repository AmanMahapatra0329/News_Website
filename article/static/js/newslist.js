const newsContainer = document.getElementById("newsContainer");
const emptyMessage = document.getElementById("emptyMessage");
const loader = document.getElementById("loader");

const articlesBtn = document.getElementById("articlesBtn");
const videosBtn = document.getElementById("videosBtn");

let newsData = [];
let currentType = "article"; // default view

// Mock Data
async function getNews() {
  return [
    {
      id: 1,
      type: "article",
      title: "AI is Transforming the Future",
      description: "Artificial Intelligence is growing rapidly.",
      fullContent: "Full article about AI revolution...",
      mediaUrl: "https://picsum.photos/600/400"
    },
    {
      id: 2,
      type: "video",
      title: "Rocket Launch Event",
      description: "Watch the latest rocket launch.",
      fullContent: "Full coverage of the mission...",
      mediaUrl: "sample-video.mp4"
    }
  ];
}

function showLoader() {
  loader.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    loader.innerHTML += `<div class="loader"></div>`;
  }
}

function createCard(item) {

  const card = document.createElement("div");
  card.className = "news-card";

  card.addEventListener("click", () => {
    readMore(item.id);
  });

  card.style.cursor = "pointer";

  card.innerHTML = `
    ${
      item.type === "video"
        ? `<video src="${item.mediaUrl}" controls></video>`
        : `<img src="${item.mediaUrl}" />`
    }

    <div class="news-content">
      <div class="news-title">${item.title}</div>
      <div>${item.description}</div>
    </div>
  `;

  return card;
}

function renderNews(type) {
  newsContainer.innerHTML = "";

  const filtered = newsData.filter(item => item.type === type);

  if (!filtered.length) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  filtered.forEach(item => {
    newsContainer.appendChild(createCard(item));
  });
}

function readMore(id) {
  const selected = newsData.find(n => n.id === id);
  localStorage.setItem("selectedArticle", JSON.stringify(selected));
  window.location.href = "article.html";
}

// Tab Click Events
articlesBtn.addEventListener("click", () => {
  currentType = "article";
  articlesBtn.classList.add("active");
  videosBtn.classList.remove("active");
  renderNews(currentType);
});

videosBtn.addEventListener("click", () => {
  currentType = "video";
  videosBtn.classList.add("active");
  articlesBtn.classList.remove("active");
  renderNews(currentType);
});

async function init() {
  showLoader();
  newsData = await getNews();
  loader.style.display = "none";
  renderNews(currentType); // default show articles
}

init();