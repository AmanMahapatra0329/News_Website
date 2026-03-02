document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".news-card");
<<<<<<< HEAD
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
      window.location.href = card.dataset.url;
    });
  });

});  










document.addEventListener("DOMContentLoaded", () => {
=======
>>>>>>> a8c4056ecbdfe082f8f7cf44fca2dd152eaeacec
  const categoryLinks = document.querySelectorAll("nav a, .mobile-nav a");
  const articlesBtn = document.getElementById("articlesBtn");
  const videosBtn = document.getElementById("videosBtn");

  let currentCategory = "All";
  let currentType = "article"; // default

  // ================= FILTER FUNCTION =================
  function filterNews() {
    cards.forEach(card => {

      const cardCategory = card.querySelector(".news-category")?.textContent.trim();
      const cardType = card.querySelector(".news-type")?.textContent.trim();

      const categoryMatch = (currentCategory === "All") || (cardCategory === currentCategory);
      const typeMatch = (currentType === "all") || (cardType === currentType);

      card.style.display = (categoryMatch && typeMatch) ? "block" : "none";
    });
  }

  // ================= CATEGORY CLICK =================
  categoryLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      currentCategory = link.getAttribute("data-category")?.trim() || "All";
      filterNews();

      categoryLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // ================= TYPE TABS =================
  if (articlesBtn && videosBtn) {

    articlesBtn.addEventListener("click", () => {
      currentType = "article";
      filterNews();
      articlesBtn.classList.add("active");
      videosBtn.classList.remove("active");
    });

    videosBtn.addEventListener("click", () => {
      currentType = "video";
      filterNews();
      videosBtn.classList.add("active");
      articlesBtn.classList.remove("active");
    });

  }

  // ================= CARD CLICK =================
  cards.forEach(card => {

    const titleElement = card.querySelector(".news-title a");
    const title = titleElement?.innerText || "";
    const articleUrl = titleElement?.href || "";
    const description = card.querySelector(".news-description")?.innerText || "";

    // 👉 Open article page when card clicked
    card.addEventListener("click", function () {
      window.location.href = articleUrl;
    });

    // ================= SHARE BUTTONS =================

    // Facebook
    card.querySelector(".share-btn.fb")?.addEventListener("click", function (e) {
      e.stopPropagation();
      const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
      window.open(fbUrl, "_blank");
    });

    // Twitter / X
    card.querySelector(".share-btn.tw")?.addEventListener("click", function (e) {
      e.stopPropagation();
      const twitterUrl =
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(articleUrl)}`;
      window.open(twitterUrl, "_blank");
    });

    // Email
    card.querySelector(".share-btn.mail")?.addEventListener("click", function (e) {
      e.stopPropagation();
      const mailUrl =
        `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + "\n\n" + articleUrl)}`;
      window.location.href = mailUrl;
    });

       // ✅ WhatsApp (FIXED)
    card.querySelector(".share-btn.wa")?.addEventListener("click", function (e) {
      e.stopPropagation();
      const message = title + "\n\n" + articleUrl;
      const whatsappUrl =
        "https://api.whatsapp.com/send?text=" +
        encodeURIComponent(message);
      window.open(whatsappUrl, "_blank");
    });

    // Copy Link
    card.querySelector(".share-btn.more")?.addEventListener("click", function (e) {
      e.stopPropagation();
      navigator.clipboard.writeText(articleUrl).then(() => {
        alert("Article link copied!");
      });
    });

  });

  // Default load
  filterNews();

});

  
  filterNews();

});   document.querySelectorAll(".news-card").forEach(card => {

  const link = card.querySelector(".news-title a");

  if (!link) return;

  const articleUrl = link.href;
  const title = link.innerText;
  const description = card.querySelector(".news-description")?.innerText || "";

