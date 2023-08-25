<script>
const nightModeButton = document.getElementById('nightModeButton');
const body = document.body;
const sunMoonIcon = document.getElementById('sunMoonIcon');
let isNightMode = false;

nightModeButton.addEventListener('click', toggleSunMoonIcon);

function toggleSunMoonIcon() {
  isNightMode = !isNightMode;
  body.classList.toggle('night-mode');
  if (isNightMode) {
    sunMoonIcon.classList.add('moon');
  } else {
    sunMoonIcon.classList.remove('moon');
  }
}

  </script>
