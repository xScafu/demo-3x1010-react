import { useEffect } from "react";
import { pageData } from "../../../data/pageData";

export default function NavMobile() {
  const navigation = pageData.header.navigation;

  useEffect(() => {
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
  });

  return (
    <>
      {/* // Mobile menu overlay */}
      <div id="mobileMenuOverlay" className="mobile-menu-overlay">
        <button id="mobileMenuClose" aria-label="Close menu">
          &times;
        </button>
        <ul>
          {navigation.menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="button"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
