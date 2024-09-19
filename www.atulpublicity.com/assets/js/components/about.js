function toggleReadMore() {
  var moreText = document.getElementById("moreText");
  var readMoreBtn = document.getElementById("readMoreBtn");
  var readLessBtn = document.getElementById("readLessBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    readMoreBtn.style.display = "none";
    readLessBtn.style.display = "inline";
  } else {
    moreText.style.display = "none";
    readMoreBtn.style.display = "block";
    readLessBtn.style.display = "none";
  }
}
