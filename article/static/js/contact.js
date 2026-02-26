document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("responseMessage").innerText =
    "Thank you. Our newsroom team will respond within 24-48 hours.";
});