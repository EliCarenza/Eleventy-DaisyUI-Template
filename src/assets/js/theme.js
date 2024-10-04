(function () {
  // Check for saved theme in localStorage
  let currentTheme = localStorage.getItem('theme');

  // If no saved theme, check system preference
  if (!currentTheme) {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    currentTheme = prefersDark ? 'dark' : 'light';
  }

  // Set the theme
  document.documentElement.setAttribute('data-theme', currentTheme);
})();

document.addEventListener('DOMContentLoaded', function () {
  const themeSelect = document.getElementById('theme-select');

  // Set the theme select value to the current theme
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (themeSelect) {
    themeSelect.value = currentTheme;

    // Update theme on selection change
    themeSelect.addEventListener('change', function () {
      const selectedTheme = themeSelect.value;
      document.documentElement.setAttribute('data-theme', selectedTheme);
      localStorage.setItem('theme', selectedTheme);
    });
  }
});
