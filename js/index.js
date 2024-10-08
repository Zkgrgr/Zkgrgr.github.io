const testimonialPage = document.querySelector(
  ".quotes-slide[data-slider-slide-index='1']"
);
testimonialPage.classList.add("quotes-slide--active");

document.querySelector(".quotes").addEventListener("mouseout", function () {
  document
    .querySelector(".quotes-slide--active")
    .classList.remove("quotes-slide--active");
  document
    .querySelector(".quotes-slide[data-slider-slide-index='1']")
    .classList.add("quotes-slide--active");
});

document.querySelectorAll(".quotes-slide").forEach((elem) =>
  elem.addEventListener("mouseover", function () {
    document
      .querySelector(".quotes-slide--active")
      .classList.remove("quotes-slide--active");
    this.classList.add("quotes-slide--active");
  })
);
