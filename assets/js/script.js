document.addEventListener("DOMContentLoaded", function () {
  // Toggle the side navigation
  const sideNavToggle = document.getElementById("sideNavToggle");
  const sideNav = document.getElementById("sideNav");
  sideNavToggle.addEventListener("click", function () {
    sideNav.classList.toggle("open");
  });

  // Responsive table
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("table-responsive");
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // Dynamic content loading
  const contentLinks = document.querySelectorAll(".content-link");
  const contentArea = document.getElementById("contentArea");
  contentLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const url = this.getAttribute("href");
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          contentArea.innerHTML = data;
        })
        .catch((error) => console.error("Error loading content:", error));
    });
  });

  // Form validation
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      const inputs = form.querySelectorAll("input, textarea, select");
      let valid = true;
      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          valid = false;
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      });
      if (!valid) {
        event.preventDefault();
        alert("Please fill out all required fields correctly.");
      }
    });
  });
});
