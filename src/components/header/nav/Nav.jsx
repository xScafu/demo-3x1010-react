export default function Nav() {
  // Evidenzia il link della pagina corrente in entrambi i menu
  const allLinks = document.querySelectorAll("menu a, .mobile-menu-overlay a");
  const currentUrl = window.location.href;

  allLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("currentPage");
    }
  });

  // Gestione del menu mobile
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  mobileMenuToggle.addEventListener("click", () => {
    mobileMenuOverlay.classList.add("active");
  });

  mobileMenuClose.addEventListener("click", () => {
    mobileMenuOverlay.classList.remove("active");
  });

  // (Opzionale) Chiudi il menu cliccando fuori dal menu
  mobileMenuOverlay.addEventListener("click", (e) => {
    if (e.target === mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove("active");
    }
  });

  // Previene l'apertura involontaria del menu quando si passa da visualizzazione larga a stretta
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      // Chiudi il menu mobile se aperto
      const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
      if (mobileMenuOverlay) mobileMenuOverlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  return (
    <>
      <nav>
        <figure id="logo">
          <img src="3x1010Logo.svg" alt="" />
        </figure>
        <button id="mobileMenuToggle" aria-label="Apri menu">
          &#9776;
        </button>
        <menu id="mainMenu">
          <li>
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              class="button"
            >
              Homepage
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="button"
            >
              Servizi
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="button"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="button"
            >
              Storia
            </a>
          </li>
        </menu>
      </nav>
    </>
  );
}
