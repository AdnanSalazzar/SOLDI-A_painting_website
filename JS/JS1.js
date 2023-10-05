initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");

  const imageList2 = document.querySelector(".check .check2")

  const slideButtons = document.querySelectorAll(
    ".slide-buttons .slide-button"
  );

  const slideButtons2 = document.querySelectorAll(
    ".slide-buttons2 .slide-button"
  );

  //console.log(slideButtons); ///in here  shows the two button elements

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button); // show each of them

      // Slide images according to the slide button clicks
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });


  slideButtons2.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button); // show each of them

      // Slide images according to the slide button clicks
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList2.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

};

window.addEventListener("load", initSlider);
