document.addEventListener("DOMContentLoaded", function(){

  const cards = document.querySelectorAll(".news-card");
  const articlesBtn = document.getElementById("articlesBtn");
  const videosBtn = document.getElementById("videosBtn");

  function filterNews(type){
    cards.forEach(card => {
      const cardType = card.querySelector(".news-type").innerText.trim();
      card.style.display = (cardType === type) ? "block" : "none";
    });
  }

  articlesBtn.addEventListener("click", function(){
    articlesBtn.classList.add("active");
    videosBtn.classList.remove("active");
    filterNews("article");
  });

  videosBtn.addEventListener("click", function(){
    videosBtn.classList.add("active");
    articlesBtn.classList.remove("active");
    filterNews("video");
  });

  // Default load
  filterNews("article");

  // Click → Open article page
  cards.forEach(card => {
    card.addEventListener("click", function(){
      const data = {
        type: card.querySelector(".news-type").innerText.trim(),
        title: card.querySelector(".news-title a").innerText,
        category: card.querySelector(".news-category").innerText,
        author: card.querySelector(".news-author").innerText,
        date: card.querySelector(".news-date").innerText,
        description: card.querySelector(".news-description").innerText,
        fullContent: card.querySelector(".news-full").innerText,
        image: card.querySelector("img").src,
        videoUrl: card.dataset.video || ""
      };
      localStorage.setItem("selectedArticle", JSON.stringify(data));
      window.location.href = "article.html";
    });
  });

});