<script>
 const nightModeButton = document.getElementById('nightModeButton');
  const body = document.body;

  nightModeButton.addEventListener('click', () => {
    body.classList.toggle('night-mode');
  });
const nightModeButton = document.getElementById('nightModeButton');
const body = document.body;
const sunMoonIcon = document.getElementById('sunMoonIcon');

nightModeButton.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  sunMoonIcon.classList.toggle('moon');
});

  </script>
