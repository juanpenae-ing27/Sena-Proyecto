// ===== CRUD básico de productos (guarda en localStorage) =====
// Más adelante puedes reemplazar las funciones leer/guardar por llamadas fetch() a tu API.
const CLAVE = "productos";
const leer = () => JSON.parse(localStorage.getItem(CLAVE)) || [];
const guardar = datos => localStorage.setItem(CLAVE, JSON.stringify(datos));

const form = document.getElementById("form-producto");
const lista = document.getElementById("lista-productos");

function pintar() {
  const productos = leer();
  lista.innerHTML = productos.length ? productos.map((p, i) => `
    <div class="tarjeta">
      ${p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}">` : `<div class="placeholder img-espacio">Imagen</div>`}
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <button class="btn" onclick="editar(${i})">Editar</button>
      <button class="btn btn-peligro" onclick="eliminar(${i})">Eliminar</button>
    </div>`).join("")
    : `<p class="placeholder">Aún no hay productos. Agrégalos con el formulario.</p>`;
}

// Crear / Actualizar
form.addEventListener("submit", e => {
  e.preventDefault();
  const productos = leer();
  const producto = { nombre: form.nombre.value, descripcion: form.descripcion.value, imagen: form.imagen.value };
  const id = form.idx.value;
  id === "" ? productos.push(producto) : (productos[id] = producto);
  guardar(productos);
  form.reset();
  form.idx.value = "";
  pintar();
});

// Editar: carga los datos en el formulario
function editar(i) {
  const p = leer()[i];
  form.idx.value = i;
  form.nombre.value = p.nombre;
  form.descripcion.value = p.descripcion;
  form.imagen.value = p.imagen;
  form.scrollIntoView({ behavior: "smooth" });
}

// Eliminar
function eliminar(i) {
  if (!confirm("¿Eliminar este producto?")) return;
  const productos = leer();
  productos.splice(i, 1);
  guardar(productos);
  pintar();
}

pintar();
