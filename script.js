<script>
    const appleLogo = document.getElementById("apple-logo");
    const microsoftLogo = document.getElementById("microsoft-logo");

    const logos = [
      "apple-logo.png",     // Nahraďte skutečným obrázkem loga Apple
      "microsoft-logo.png"  // Nahraďte skutečným obrázkem loga Microsoft
    ];

    function getRandomLogo() {
      return logos[Math.floor(Math.random() * logos.length)];
    }

    function showRandomLogo(logoElement) {
      logoElement.style.backgroundImage = `url('${getRandomLogo()}')`;
      logoElement.style.opacity = 1;

      setTimeout(() => {
        logoElement.style.opacity = 0;
      }, 3000); // Zobrazení po dobu 3 sekund
    }

    // Zobrazování náhodných log
    setInterval(() => {
      showRandomLogo(appleLogo);
      showRandomLogo(microsoftLogo);
    }, 5000); // Zobrazení každých 5 sekund
  </script>
