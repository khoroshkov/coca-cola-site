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

  el.src = "../assets/img/Star.PNG";
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
