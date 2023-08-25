<script>
const nightModeButton = document.getElementById('nightModeButton');
const body = document.body;
const sunMoonIcon = document.getElementById('sunMoonIcon');

nightModeButton.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  sunMoonIcon.classList.toggle('fa-sun'); // Přepínání ikony slunce/měsíce
  sunMoonIcon.classList.toggle('fa-moon');
});

  </script>
