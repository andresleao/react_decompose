import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <a href="#about" className="navigation__link">
        About
      </a>
      <a href="#services" className="navigation__link">
        Services
      </a>
      <a href="#contact" className="navigation__link">
        Contact
      </a>
    </header>
  );
}

export default Header;
