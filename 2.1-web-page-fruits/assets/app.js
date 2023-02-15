const btnanbur = document.querySelector(".header__menu");
const item = document.querySelectorAll(".menu__item");
const heroTitle = document.querySelector(".hero__title");
let state = true;

btnanbur.addEventListener("click", () => {
  if (state == true) {
    for (let i = 0; i < item.length; i++) {
      item[i].style.display = "initial";
    }
    heroTitle.style.bottom = '15%'
    state = false;
  } else if (state == false) {
    for (let i = 0; i < item.length; i++) {
      item[i].style.display = "none";
    }
    heroTitle.style.bottom = "40%";
    state = true;

  }
});
