function expand(parentClassOfButton) {
  var dots = document.querySelector("." + parentClassOfButton + " .dots");
  var moreText = document.querySelector("." + parentClassOfButton + " .more");
  var btnText = document.querySelector("." + parentClassOfButton + " .more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
