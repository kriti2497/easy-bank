import logo from "../assets/images/logo.svg";

const Header: React.FC<{
  openHamburger: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleOpen: any;
}> = ({ openHamburger, handleOpen }) => {
  return (
    <header>
      <div
        className={`overlay ${
          openHamburger ? "open-overlay" : "close-overlay has-fade"
        }`}
      ></div>
      <nav className="nav flex flex-jc-sb flex-ai-center">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <a
          onClick={handleOpen}
          className={`hamburger hide-on-desktop ${openHamburger ? "open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div className="menu-options hide-on-mobile">
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Blog</a>
          <a>Careers</a>
        </div>
        <button type="button" className="hide-on-mobile">
          Request Invite
        </button>
      </nav>
      <div
        className={`mobile-menu ${
          openHamburger ? "show-mobile-menu" : "hide-mobile-menu"
        }`}
      >
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Blog</a>
        <a>Careers</a>
      </div>
    </header>
  );
};

export default Header;
