// Theme changer code
(function () {
  const initializeTheme = () => {
    let currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      currentTheme = prefersDark ? "dark" : "light";
    }

    console.log("Initializing theme:", currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeToggleButton(currentTheme);
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    console.log("Toggling theme from", currentTheme, "to", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeToggleButton(newTheme);
  };

  const toggleDropdownMenu = () => {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const isExpanded = dropdownMenu.classList.toggle("hidden");
    const dropdownButton = document.getElementById("dropdownButton");
    dropdownButton.setAttribute("aria-expanded", !isExpanded);
  };

  const updateThemeToggleButton = (theme) => {
    const themeToggleButton = document.getElementById("themeToggleButton");
    const isDarkTheme = theme === "dark";
    themeToggleButton.checked = isDarkTheme;
    console.log("Updated theme toggle button:", themeToggleButton.checked);
  };

  document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();

    const themeToggleButton = document.getElementById("themeToggleButton");
    if (themeToggleButton) {
      themeToggleButton.addEventListener("change", toggleTheme);
    } else {
      console.error("Theme toggle button not found on DOMContentLoaded");
    }

    const dropdownButton = document.getElementById("dropdownButton");
    if (dropdownButton) {
      dropdownButton.addEventListener("click", toggleDropdownMenu);
    } else {
      console.error("Dropdown button not found on DOMContentLoaded");
    }
  });
})();