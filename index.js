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

function showContactForm() {
  var contactBtn = document.getElementById("contact-btn");
  var contactForm = document.getElementById("contact-form");

  contactBtn.classList.add("contact-btn-hide");
  contactBtn.classList.remove("contact-btn-show");


  contactForm.classList.add("contact-form-show");
  contactForm.classList.remove("contact-form-hide");

}

function showThankYou() {
  var thankYouText = document.getElementsByClassName("thank-you")[0];

  thankYouText.style.visibility = "visible";
}
