// HEADER
// HEADER
// HEADER
const btnMenu = document.querySelector("#menuDesplegable");
const lista = document.querySelector("nav ul");
const overlay = document.querySelector("#menuOverlay");

btnMenu.addEventListener("click", function () {
  lista.classList.toggle("mostrar");
  overlay.classList.toggle("activo");
});

overlay.addEventListener("click", function () {
  lista.classList.remove("mostrar");
  overlay.classList.remove("activo");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    lista.classList.remove("mostrar");
    overlay.classList.remove("activo");
  }
});


//NAVEGACIÓN
//NAVEGACIÓN
//NAVEGACIÓN
const pages = [
  "inicio",
  "contacto",
  "profesionales",
  "servicios",
  "reservar",
  "turnos",
  "loginadmin"
];

function hideAllPages() {
  pages.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("is-active");
  });
}

function showPage(id) {
  hideAllPages();

  const target = document.getElementById(id);
  if (target) target.classList.add("is-active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function routeFromHash() {
  const id = window.location.hash.replace("#", "");

  if (id === "galeria" || id === "") {
    showPage("inicio");
    return;
  }

  if (pages.includes(id)) showPage(id);
  else showPage("inicio");
}

document.querySelectorAll("nav a[href^='#']").forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").replace("#", "");

    if (id === "galeria") {
      e.preventDefault();
      window.location.hash = "inicio";
      showPage("inicio");
      return;
    }

    if (!pages.includes(id)) return;

    e.preventDefault();
    window.location.hash = id;
    showPage(id);

    const ul = document.querySelector("nav ul");
    const overlay = document.getElementById("menuOverlay");
    if (ul) ul.classList.remove("mostrar");
    if (overlay) overlay.classList.remove("activo");
  });
});

window.addEventListener("hashchange", routeFromHash);
routeFromHash();