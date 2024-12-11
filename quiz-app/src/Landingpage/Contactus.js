import React from "react";
import "./Contactus.css";
import { Link } from "react-router-dom";
import ContactusImage from "./images/Mention (1).gif";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="contactus-container p-3">
      <header className=" text-center">
        <h3 className=" fs-2 fw-bold">Reach Out and Connect</h3>
      </header>
      <section className="contactus-section d-flex flex-lg-row flex-sm-column align-items-center justify-content-between">
        <div className="contactus-sub">
          <img src={ContactusImage} alt="contactusGif" className="contactimg" />
        </div>
        <div className="contactus-sub">
          <form className="contact-form">
            <div>
              {" "}
              <label>Name:</label>
              <input
                type="text"
                name="username"
                placeholder="Who's reaching out?"
              />
            </div>
            <div>
              {" "}
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Where can we reply?"
              />
            </div>
            <div>
              {" "}
              <label>Subject:</label>
              <input
                type="text"
                name="subject"
                placeholder="What's on your mind?"
              />
            </div>
            <div>
              {" "}
              <label>Message:</label>
              <br />
              <textarea
                placeholder="Share your thoughts!"
                className="textarea"></textarea>
            </div>
            <br />
            <div className="btn-container">
              <button className="Contactus-btn">Lets Get in Touch</button>
            </div>
          </form>
        </div>
      </section>
      <section className="social-links d-flex flex-column align-items-center p-3 flex-sm-wrap
      
      ">
        <div className="links d-flex flex-lg-row gap-4">
          <Link className="linker">
            <FaTwitter className=" social-icon" />
          </Link>
          <Link className="linker">
            <RiInstagramFill className=" social-icon" />
          </Link>
          <Link className="linker">
            <FaLinkedinIn className=" social-icon" />
          </Link>
          <Link className="linker">
            <FaFacebook className=" social-icon" />
          </Link>
        </div>
        <p className=" pt-3 fs-6 fw-medium">Stay Connected - Follow the Fun!</p>
        <section className="support">
          <p>
            Need Assistance? We're here to help?{" "}
            <Link to="mailto:ejoy0600@gmail.com" className="email-link">techquest@gmail.com</Link>
          </p>
          <p>
            <Link className=" text-decoration-none explore-link">Explore More Quest!</Link>
          </p>
        </section>
      </section>
    </div>
  );
};

export default Contactus;
