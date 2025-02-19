document.addEventListener("DOMContentLoaded", () => {
  const sections = ["about", "services", "connections", "contact"];

  sections.forEach((section) => {
    fetch(`assets/sections/${section}.html`)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(section).innerHTML = html;
      })
      .catch((error) => console.error(`Error loading ${section}:`, error));
  });
});
