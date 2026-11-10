// IMPORTANT: Replace this with your real WhatsApp number in international format.
// Example Pakistan number: 923001234567 (no +, spaces or dashes).
const WHATSAPP_NUMBER = "6282324679856";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
const whatsappLink = document.getElementById("whatsappLink");
whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello HeavenSeekers! I would like to know more about your travel packages.")}`;

document.querySelectorAll(".choose-package").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("packageSelect").value = button.dataset.package;
    document.getElementById("booking").scrollIntoView({behavior:"smooth"});
  });
});

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    "Hello HeavenSeekers! I'd like to plan a trip.",
    `Name: ${data.get("name")}`,
    `WhatsApp: ${data.get("phone")}`,
    `Package: ${data.get("package")}`,
    `Preferred date: ${data.get("date") || "Flexible"}`,
    `Travelers: ${data.get("people")}`,
    `Notes: ${data.get("message") || "None"}`
  ];
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
