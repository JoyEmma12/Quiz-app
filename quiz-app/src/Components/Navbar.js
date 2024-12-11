import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false); // State to track navbar visibility

  const toggleNav = () => {
    setNavOpen(!navOpen); 
  };

  useEffect(() => {
    const navbarLinks = document.querySelector(".navbar-links");

    if (navOpen) {
      navbarLinks.classList.add("responsive");
    } else {
      navbarLinks.classList.remove("responsive");
    }
  }, [navOpen]); 

  return (
    <header className="navbars">
      <h2 className="fw-bold fs-2 text-white">TechQuest</h2>
      <nav className="navbar-links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/courses" className="link">
          Courses
        </Link>
        <Link to="/features" className="link">
          Features
        </Link>
        <Link to="/about" className="link">
          About Us
        </Link>
        <Link to="/contactus" className="link">
          Contact Us
        </Link>

        <div className="btns">
          <Link to="/login" className="nav-buttons">
            <button className="login-btn">LogIn</button>
          </Link>
          <Link to="/signup" className="nav-buttons">
            <button className="signup-btn">SignUp</button>
          </Link>
        </div>
      </nav>

      {/* Show FaBars when the menu is closed and FaTimes when open */}
      <button className="nav-btns" onClick={toggleNav}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Navbar;
