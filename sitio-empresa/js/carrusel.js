// ===== Carrusel simple: funciona con cualquier .carrusel de la página =====
document.querySelectorAll(".carrusel").forEach(carrusel => {
  const slides = carrusel.querySelector(".slides");
  const total = slides.children.length;
  let i = 0;

  const mover = paso => {
    i = (i + paso + total) % total;
    slides.style.transform = `translateX(-${i * 100}%)`;
  };

  carrusel.querySelector(".prev").onclick = () => mover(-1);
  carrusel.querySelector(".next").onclick = () => mover(1);
  setInterval(() => mover(1), 5000); // cambio automático cada 5 s
});
