function showForm() {
  document.getElementById("applicationForm").style.display = "block";
}

document.getElementById("careerForm").addEventListener("submit", function(e){
  document.getElementById("careerResponse").innerText =
    "Application submitted successfully. Our HR team will contact you soon.";
});

function showForm() { 
  document.getElementById("applicationForm").style.display = "block";
}

if (window.location.search.includes('success=true')) {
  alert('Request Submitted Successfully.');
}