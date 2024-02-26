import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <p>EarnIT</p>
      </Link>
        <p>Why choose us?</p>
        <p>What do clients say?</p>
        <p>FAQ</p>
    </nav>
  );
}

export default Navbar;