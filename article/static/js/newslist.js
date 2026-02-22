document.addEventListener("DOMContentLoaded", function(){

const newsData = [
{
  type:"article",
  category:"Technology",
  title:"AI is Redefining Global Economy in 2026",
  author:"Editorial Team",
  date:"Jan 20, 2026",
  description:"Artificial intelligence is rapidly transforming healthcare.",
  image:"https://picsum.photos/800/500?random=1",
  fullContent:"Full detailed article content about AI economy impact in 2026..."
},
{
  type:"video",
  category:"World",
  title:"Election Results Explained",
  author:"Global Desk",
  date:"Jan 18, 2026",
  description:"Watch full breakdown of international political shifts.",
  image:"https://picsum.photos/800/500?random=2",
  videoUrl:"sample-video.mp4",
  fullContent:"Video detailed explanation..."
}
];

const categoryColors = {
  Technology:"#00c853",
  World:"#ff0047",
  Business:"#8b5cf6",
  Sports:"#ff9800"
};

const container = document.getElementById("newsContainer");
const emptyMessage = document.getElementById("emptyMessage");

function renderNews(data){
  container.innerHTML = "";

  if(data.length === 0){
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  data.forEach(news => {

    const card = document.createElement("div");
    card.classList.add("news-card");

    card.innerHTML = `
      <div class="news-image">
        <img src="${news.image}">
        <div class="category" style="background:${categoryColors[news.category] || "#555"}">
          ${news.category}
        </div>
        <div class="title-overlay">${news.title}</div>
      </div>

      <div class="news-content">
        <div class="meta">${news.author} | ${news.date}</div>
        <div class="description">${news.description}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      localStorage.setItem("selectedArticle", JSON.stringify(news));
      window.location.href = "article.html";
    });

    container.appendChild(card);
  });
}

const articlesBtn = document.getElementById("articlesBtn");
const videosBtn = document.getElementById("videosBtn");

articlesBtn.addEventListener("click", () => {
  articlesBtn.classList.add("active");
  videosBtn.classList.remove("active");
  renderNews(newsData.filter(n => n.type === "article"));
});

videosBtn.addEventListener("click", () => {
  videosBtn.classList.add("active");
  articlesBtn.classList.remove("active");
  renderNews(newsData.filter(n => n.type === "video"));
});

renderNews(newsData.filter(n => n.type === "article"));

});