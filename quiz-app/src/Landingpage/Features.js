import React from "react";
import "./Features.css";
// import image2 from "./images/image2.png";

const FeaturesItem = [
  {
    id: 1,
    title: "Comprehensive Quizzes",
    item: "Access a wide variety of quizzes across multiple tech domains",
  },
  {
    id: 2,
    title: "Progress Tracking",
    item: "Monitor your improvement and identify areas that need more attention.",
  },
  {
    id: 3,
    title: "Interactive Learning",
    item: "Engage with interactive quizzes that make learning fun and effective.",
  },
  {
    id: 4,
    title: "Community Challenges ",
    item: "Compete with your peers and see where you stand in the tech community.",
  },
];

const Features = () => {
  return (
    <div className="features-container d-flex flex-lg-column align-items-center">
      <header className=" p-5 header-container">
        <h3 className="fw-bold fs-2">Why Choose Our Tech Quiz App?</h3>
        <p className="header-content fw-medium fs-6">
          Our app offers unique features tailored to help you assess and enhance
          your tech skills. From personalized learning paths to detailed
          feedback on each quiz, we make it easy to learn and grow.
        </p>
      </header>
      <div className="features-content">
        <div className="Features-lists d-flex flex-lg-row align-items-center justify-content-evenly gap-4">
          {FeaturesItem.map((items) => {
            const { id, title, item } = items;
            return (
              <div className="features-item shadow" key={id}>
                <h4 className=" fw-medium">{title}</h4>
                <p className=" fw-light">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
