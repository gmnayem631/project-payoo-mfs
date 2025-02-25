// clicking Bangladesh button
document.getElementById("bd-btn").addEventListener("click", function (event) {
  document.getElementById("bd").style.display = "block";
  document.getElementById("usa").style.display = "none";
});

// clicking USA button
document.getElementById("usa-btn").addEventListener("click", function (event) {
  document.getElementById("usa").style.display = "block";
  document.getElementById("bd").style.display = "none";
});
