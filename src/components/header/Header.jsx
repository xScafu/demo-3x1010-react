export default function Header() {
  return (
    <>
      <header>
        {/* // Mobile menu overlay */}
        <div id="mobileMenuOverlay" class="mobile-menu-overlay">
          <button id="mobileMenuClose" aria-label="Chiudi menu">
            &times;
          </button>
          <ul>
            <li>
              <a href="http://localhost:5173" class="button">
                Homepage
              </a>
            </li>
            <li>
              <a href="#" class="button">
                Servizi
              </a>
            </li>
            <li>
              <a href="#" class="button">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" class="button">
                Storia
              </a>
            </li>
          </ul>
        </div>
        {/* // Hero Section */}
        <div class="heroSection">
          <div class="heroContent">
            <h1>Uno spazio dove la tecnologia rende possibile la creatività</h1>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Scopri 3x1010
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
