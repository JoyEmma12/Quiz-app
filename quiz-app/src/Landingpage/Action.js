import React from "react";
import "./Action.css";
// import "./HeroPage.css";
import actionimg from "./images/actionimg.png";
import Elipse from "./images/Ellipse 1.png";
import { Link } from "react-router-dom";

const Action = () => {
  return (
    <div className="action-container">
      <header className="action-header text-center">
        <h3 className="fw-bold fs-2">Ready to Test your Skills?</h3>
        <p className="fw-medium fs-5">
          Sign up today and start exploring our quizzes.
        </p>
      </header>
      <div className="action-content d-flex flex-lg-row flex-sm-column align-items-center justify-content-around">
        <div className="hero-imgcontent">
          <img src={Elipse} alt="elipse" className="elipseaction" />
          <img src={actionimg} alt="actionimg" className="actionimg" />
        </div>
        <div className="action-subcontent">
          <p className="fw-medium">
            Join a community of tech enthusiasts who are challenging themselves
            and growing their skills every day. Whether you're preparing for an
            interview or just love learning, our quizzes have something for you.
          </p>
          <Link>
            <button className="getstarted-btn">Sign Up Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Action;
