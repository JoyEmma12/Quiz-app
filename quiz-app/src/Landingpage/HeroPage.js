import { Link } from "react-router-dom";
import "./HeroPage.css";
import Elipse from "./images/Ellipse 1.png";
import image1 from "./images/image1.png";
const HeroPage = () => {
  return (
    <div className="hero-container container d-flex flex-lg-row flex-sm-column align-items-center justify-content-between gap-4">
      <div className="hero-content">
        <h2 className="fw-bold fs-1">Level Up your Knowledge with TechQuest</h2>
        <p className="fw-medium">
          Challenge yourself with quizzes designed to test and expand your tech
          knowledge.
        </p>
        <p className="fw-light">
          Explore a wide range of quizzes across various tech fields like web
          development, data science, and more. Whether you’re a beginner or a
          seasoned professional, our quizzes are designed to help you gauge your
          skills and discover new areas of growth.
        </p>
        <Link>
          <button className="getstarted-btn">Get Started</button>
        </Link>
      </div>
      <div className="hero-imgcontent">
        <img src={Elipse} alt="elipse" className="elipse" />
        <img src={image1} alt="image1" className="heroimage" />
      </div>
    </div>
  );
};

export default HeroPage;
