//==== SHOW MESSAGE ===//

const showMessage = () => {
  const hidden = document.querySelector("#message");
  const text = document.querySelector(".hidden-text");
  hidden.classList.remove("hidden");
  if (screen.width > 1200) {
    text.classList.remove("hidden-text");
  }
};

setTimeout(() => {
  showMessage();
}, 3000);

//==== CUSTOM DROPDOWN GENDER MENU ====//

document
  .querySelector(".custom-select-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
  });

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
    }
  });
}

//==== SPARKLING STARS =====//

const app = document.getElementById("sparkling-stars");

const myRand = () => {
  let r = 40;
  while (30 < r && r < 50) {
    r = Math.random() * 100;
  }
  return r;
};

for (let i = 0; i < 50; i++) {
  const delay = Math.random() + "s";
  const el = document.createElement("img");

  el.src = "./assets/img/Star.png";
  el.className = "glitter-star";
  el.style.top = myRand() + "%";
  el.style.right = myRand() + "%";
  el.style.animationDelay = delay;
  el.style.msAnimationDelay = delay;
  el.style.webkitAnimationDelay = delay;
  el.style.monAnimationDelay = delay;
  app.appendChild(el);
}

//==== PRESENTS GALLERY ====//

const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");

btn1.addEventListener("click", () => currentSlide(1));
btn2.addEventListener("click", () => currentSlide(2));
btn3.addEventListener("click", () => currentSlide(3));

const buttons = document.getElementsByClassName("present-container-button");

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("present-display");
  const buttons = document.getElementsByClassName("present-container-button");
  if (n > slides.length) {
    slideIndex = 1;
  }
  buttons[n - 1].classList.add("active");
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    buttons[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "flex";
  buttons[slideIndex - 1].classList.add("active");
}

//===== SCROLL EFFECT ======//

$(".main").onepage_scroll({
  sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
  pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
  loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true,                  // You can activate the keyboard controls
  responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                   // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});