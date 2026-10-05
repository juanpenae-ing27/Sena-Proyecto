// ===== Navbar y footer compartidos: edítalos solo aquí y se actualizan en todas las páginas =====
const paginas = [
  { url: "inicio.html", texto: "Inicio" },
  { url: "productos.html", texto: "Productos" },
  { url: "servicios.html", texto: "Servicios" },
  { url: "quienessomos.html", texto: "Quiénes somos" },
  { url: "contacto.html", texto: "Contacto" },
  { url: "login.html", texto: "Ingresar" },
];

const actual = location.pathname.split("/").pop() || "index.html";

document.getElementById("navbar").innerHTML = `
  <nav class="navbar">
    <a href="inicio.html" class="logo">[Nombre empresa]</a>
    <button class="btn-menu" aria-label="Abrir menú">☰</button>
    <ul class="menu">
      ${paginas.map(p => `<li><a href="${p.url}" class="${p.url === actual ? "activo" : ""}">${p.texto}</a></li>`).join("")}
    </ul>
  </nav>`;

document.getElementById("footer").innerHTML =
  `<footer>© ${new Date().getFullYear()} [Nombre empresa] — Aquí va la información de contacto y redes sociales</footer>`;

// Menú hamburguesa en móvil
document.querySelector(".btn-menu").addEventListener("click", () =>
  document.querySelector(".menu").classList.toggle("abierto"));
