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
    console.log("ENTER");
    let heading = e.target.querySelector(".wybor__item--heading");
    heading.classList.toggle("wybor__item--heading--open");
  });
  wyborItem.addEventListener("mouseleave", (e) => {
    console.log("LEAVE");
    let heading = e.target.querySelector(".wybor__item--heading");
    heading.classList.toggle("wybor__item--heading--open");
  });
});

const drogeria = document.querySelector(".heading__home");
drogeria.addEventListener("click", () => {
  window.location.pathname = "index.html";
});

//koszyk

const ceny = document.getElementsByClassName("produkty__btn");
const koszyk = document.getElementById("koszyk");
let ogolnaCena = 0;
let item = 0;

for (let i = 0; i < ceny.length; i++) {
  ceny[i].addEventListener("click", dodajDoKoszyka);
}

function dodajDoKoszyka(event) {
  let cenaProduktu = parseFloat(event.target.value);
  ogolnaCena += cenaProduktu;
  item++;

  //wpisz summary
  const basketSummary = koszyk.querySelector(".basket__summary");
  basketSummary.innerHTML = `Ilosc ${item}, wartość: ${ogolnaCena} PLN`;
}
