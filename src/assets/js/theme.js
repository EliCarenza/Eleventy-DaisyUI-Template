// Theme changer code
(function () {
  const initializeTheme = () => {
    let currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      currentTheme = prefersDark ? "dark" : "light";
    }

    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeToggleButton(currentTheme);
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeToggleButton(newTheme);
  };

  const updateThemeToggleButton = (theme) => {
    const themeToggleButton = document.getElementById("themeToggleButton");
    const isDarkTheme = theme === "dark";
    themeToggleButton.setAttribute("aria-pressed", isDarkTheme);
    themeToggleButton.innerHTML = isDarkTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  };

  document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();

    const themeToggleButton = document.getElementById("themeToggleButton");
    themeToggleButton.addEventListener("click", toggleTheme);
  });
})();