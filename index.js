const hamburger = document.querySelector(".hamburger--js");
console.log("LALALA: " + hamburger);

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  console.log("AAAA " + nav);
  nav.classList.toggle("navigation--open");
});

const wyborItems = document.querySelectorAll("div.wybor__item");
wyborItems.forEach((wyborItem) => {
  wyborItem.addEventListener("mouseenter", (e) => {
    let heading = e.target.querySelector(".wybor__item--heading");
    heading.classList.toggle("wybor__item--heading--open");
  });
  wyborItem.addEventListener("mouseleave", (e) => {
    let heading = e.target.querySelector(".wybor__item--heading");
    heading.classList.toggle("wybor__item--heading--open");
  });
});
