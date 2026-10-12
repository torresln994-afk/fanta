// Número do WhatsApp (DDI + DDD + número, só dígitos). TROCAR pelo número real.
const WHATSAPP = "5524999999999";
const MSG = "Olá, Dra. Rogéria! Gostaria de agendar uma consulta.";

document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", false);
}));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 80 + "ms";
  io.observe(el);
});
