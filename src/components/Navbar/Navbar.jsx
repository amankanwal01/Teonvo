import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">TEONVO</div>
      <ul className="nav-links">
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Testimonals</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <button className="nav-button">Get Template</button>
    </nav>
  );
}

export default Navbar;
