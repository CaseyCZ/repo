<script>
 const nightModeButton = document.getElementById('nightModeButton');
  const body = document.body;

  nightModeButton.addEventListener('click', () => {
    body.classList.toggle('night-mode');
  });
  </script>
