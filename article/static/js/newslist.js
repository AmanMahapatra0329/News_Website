document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".news-card");
  const categoryLinks = document.querySelectorAll("nav a, .mobile-nav a");
  const articlesBtn = document.getElementById("articlesBtn");
  const videosBtn = document.getElementById("videosBtn");

  let currentCategory = "All";
  let currentType = "article";

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

  // ================= CARD CLICK + SHARE =================
  cards.forEach(card => {
    const titleElement = card.querySelector(".news-title a");
    const title = titleElement?.innerText?.trim() || "";
    const articleUrl = titleElement?.href || window.location.href;
    const description = card.querySelector(".news-description")?.innerText?.trim() || "";
    const imageUrl = card.querySelector(".news-image img")?.src || "";

    // Open article on card click
    card.addEventListener("click", function () {
      window.location.href = articleUrl;
    });

    // ── FACEBOOK ──────────────────────────────────────────
    card.querySelector(".share-btn.fb")?.addEventListener("click", function (e) {
      e.stopPropagation();
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
      window.open(url, "_blank");
    });

    // ── TWITTER / X ───────────────────────────────────────
    card.querySelector(".share-btn.tw")?.addEventListener("click", function (e) {
      e.stopPropagation();
      const text = `${title}\n${articleUrl}`;
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    });

    // ── EMAIL ─────────────────────────────────────────────
    card.querySelector(".share-btn.mail")?.addEventListener("click", function (e) {
      e.stopPropagation();
      const subject = encodeURIComponent(title);
      const body = encodeURIComponent(`${title}\n\n${description}\n\nRead more: ${articleUrl}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    });

    // ── WHATSAPP ──────────────────────────────────────────
    card.querySelector(".share-btn.wa")?.addEventListener("click", function (e) {
      e.stopPropagation();
      const message = `*${title}*\n\n${description}\n\n${articleUrl}`;
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });

    // ── COPY LINK / WEB SHARE ─────────────────────────────
    card.querySelector(".share-btn.more")?.addEventListener("click", function (e) {
      e.stopPropagation();
      if (navigator.share) {
        navigator.share({
          title: title,
          text: description,
          url: articleUrl,
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(articleUrl).then(() => {
          const btn = card.querySelector(".share-btn.more");
          const original = btn.innerText;
          btn.innerText = "✓";
          setTimeout(() => btn.innerText = original, 2000);
        });
      }
    });

  });

  // Default load
  filterNews();

});