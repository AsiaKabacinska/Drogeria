const hamburger = document.querySelector(".hamburger--js");
console.log("LALALA: " + hamburger);

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  console.log("AAAA " + nav);
  nav.classList.toggle("navigation--open");
});
