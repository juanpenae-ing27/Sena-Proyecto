// ===== Login: estructura lista para conectar con un backend =====
// TODO: cambia esta URL por el endpoint real de autenticación (Node, PHP, Java, Firebase, etc.)
const API_LOGIN = "https://tu-servidor.com/api/login";

const form = document.getElementById("form-login");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const datos = { correo: form.correo.value, clave: form.clave.value };

  try {
    // Descomenta cuando tengas el backend:
    // const res = await fetch(API_LOGIN, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(datos),
    // });
    // if (!res.ok) throw new Error("Credenciales inválidas");
    // const { token } = await res.json();
    // sessionStorage.setItem("token", token);
    // location.href = "inicio.html";

    mensaje.textContent = "Login pendiente de integración con el servidor.";
  } catch (err) {
    mensaje.textContent = err.message;
  }
});
