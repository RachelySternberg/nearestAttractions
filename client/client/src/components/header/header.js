import logo from "../../assets/logo.png";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <div className="header-links">
      <div className="icon">
        <a rel="noreferrer"
          href="https://github.com/RachelySternberg/Nearest-Attractions"
          target="_blank" 
        >
          <span className="icon__name">GitHub</span>
        </a>
      </div> </div>
    </header>
  );
}

export default Header;
