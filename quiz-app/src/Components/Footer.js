import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container d-flex flex-lg-row align-items-center justify-content-around">
      <div className="footer-logo text-white fw-bold fs-2">TechQuest</div>
      <div className="links gap-4 d-flex flex-lg-row">
        <Link className="text-decoration-none text-white fw-medium">Home</Link>
        <Link className="text-decoration-none text-white fw-medium">
          Courses
        </Link>
        <Link className="text-decoration-none text-white fw-medium">
          Features
        </Link>
        <Link className="text-decoration-none text-white fw-medium">
          About Us
        </Link>
        <Link className="text-decoration-none text-white fw-medium">
          Contact Us
        </Link>
      </div>
      <div className="social-icons d-flex flex-row gap-3">
        <Link className="text-decoration-none">
          <FaFacebook className="fs-3 footer-icon" />
        </Link>
        <Link className="text-decoration-none">
          <FaTwitter className="fs-3 footer-icon" />
        </Link>
        <Link className="text-decoration-none">
          <RiInstagramFill className="fs-3 footer-icon" />
        </Link>
        <Link className="text-decoration-none">
          <FaGithub className="fs-3 footer-icon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer