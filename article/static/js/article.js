document.addEventListener("DOMContentLoaded", function(){

const article = JSON.parse(localStorage.getItem("selectedArticle"));
const container = document.getElementById("articleContainer");

if(!container){
  console.error("articleContainer not found");
  return;
}

if(!article){
  container.innerHTML = "<h2>Article Not Found</h2>";
  return;
}

let mediaContent = "";

if(article.type === "video"){
  mediaContent = `
    <video controls style="width:100%; border-radius:8px;">
      <source src="${article.videoUrl}" type="video/mp4">
    </video>
  `;
}else{
  mediaContent = `
    <img src="${article.image}" class="article-image">
  `;
}

container.innerHTML = `
  <button onclick="window.history.back()" class="back-btn">
     Back
  </button>

  <div class="article-category">${article.category}</div>

  <h1 class="article-title">${article.title}</h1>

  <div class="article-meta">
    ${article.author} | ${article.date}
  </div>

  ${mediaContent}

  <div class="article-content">
    <p>${article.fullContent}</p>
  </div>
`;

});