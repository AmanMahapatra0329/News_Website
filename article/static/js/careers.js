function showForm() {
  document.getElementById("applicationForm").style.display = "block";
}

document.getElementById("careerForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("careerResponse").innerText =
    "Application submitted successfully. Our HR team will contact you soon.";
});