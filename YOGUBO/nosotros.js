var auto = document.querySelector('.auto');
var autoimg = document.querySelector('.auto img');
var superficie = document.querySelector('.superficie');



document.addEventListener("keyup", e=> {
  if (e.key === "Escape") {
   superficie.classList.toggle('moverDerecha');
     auto.classList.toggle('suspension');

  }
});