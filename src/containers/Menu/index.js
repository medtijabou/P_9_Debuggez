import { useState } from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import "./style.scss";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <Logo />
      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        role="button"
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleMenu();
          }
        }}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#nos-services">Nos services</a>
        </li>
        <li>
          <a href="#nos-realisations">Nos réalisations</a>
        </li>
        <li>
          <a href="#notre-equipe">Notre équipe</a>
        </li>
        {/* Ajouter le bouton Contact dans le menu hamburger */}
        <li>
          <Button
            title="contact"
            onClick={() => {
              window.document.location.hash = "#contact";
            }}
            className="contact-btn"
          >
            Contact
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
