document.addEventListener('DOMContentLoaded', function () {
  const themeSelect = document.getElementById('theme-select');
  const dropdownButton = document.getElementById('dropdownButton');
  const themeToggleButton = document.getElementById('themeToggleButton');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  function updateTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }

    if (themeSelect) {
      themeSelect.value = theme;
    }
  }

  function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const currentTheme = savedTheme || document.documentElement.getAttribute('data-theme') || 'light';
    updateTheme(currentTheme);
  }

  if (themeSelect) {
    themeSelect.addEventListener('change', function () {
      updateTheme(themeSelect.value);
    });
  }

  if (dropdownButton) {
    dropdownButton.addEventListener('click', function () {
      const dropdownMenu = document.getElementById('dropdownMenu');
      dropdownMenu.classList.toggle('hidden');
    });
  }

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', function () {
      const isLightTheme = !sunIcon.classList.contains('hidden');
      const newTheme = isLightTheme ? 'dark' : 'light';
      updateTheme(newTheme);
    });
  }

  setInitialTheme();
});