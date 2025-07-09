import { useEffect } from "react";
import { pageData } from "../../../data/pageData";

export default function Nav() {
  const navigation = pageData.header.navigation;
  // Evidenzia il link della pagina corrente in entrambi i menu
  useEffect(() => {
    const allLinks = document.querySelectorAll(
      "menu a, .mobile-menu-overlay a"
    );
    const currentUrl = window.location.href;

    allLinks.forEach((link) => {
      if (link.href === currentUrl) {
        link.classList.add("currentPage");
      }
    });
  });

  console.log(navigation);

  return (
    <>
      <nav>
        <figure id="logo">
          <img src={navigation.logo.src} alt={navigation.logo.alt} />
        </figure>
        <button id="mobileMenuToggle" aria-label="Open menu">
          &#9776;
        </button>
        <menu id="mainMenu">
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
        </menu>
      </nav>
    </>
  );
}
