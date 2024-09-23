import React from "react";
import "./PopularCourses.css";
import Blockchain from "./images/Blokchaindev.jpg";
import Cybersecurity from "./images/cybersecurity.jpg";
import dataAnalysis from "./images/dataanlysis.jpg";
import devops from "./images/Devops.jpg";
import webdev from "./images/Webdevimage.jpg";
import machinelearning from "./images/Machinelearning.jpg";
import uiux from "./images/uiux design.jpg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const coursesInfo = [
  {
    id: 1,
    image: Blockchain,
    courseTitle: "Blockchain Development",
    aboutCourse:
      "Dive into blockchain development with quizzes on creating and deploying smart contracts and understanding DApps.",
  },
  {
    id: 2,
    image: Cybersecurity,
    courseTitle: "CyberSecurity",
    aboutCourse:
      "Assess your knowledge of network security, encryption, ethical hacking, and threat analysis with our cybersecurity quizzes.",
  },
  {
    id: 3,
    image: webdev,
    courseTitle: "Web Development",
    aboutCourse:
      "Test your skills in both frontend and backend development. Cover topics like HTML, CSS, JavaScript, Node.js, and databases",
  },
  {
    id: 4,
    image: dataAnalysis,
    courseTitle: "Data Science",
    aboutCourse:
      "Test your skills in data manipulation, visualization, and statistical analysis using tools like Python, R, and SQL.",
  },
  {
    id: 5,
    image: devops,
    courseTitle: "Devops",
    aboutCourse:
      "Put your DevOps knowledge to the test with quizzes on continuous integration, deployment pipelines, and containerization.",
  },
  {
    id: 6,
    image: machinelearning,
    courseTitle: "Machine Learning",
    aboutCourse:
      "Challenge yourself with quizzes on machine learning algorithms, neural networks, and data preprocessing techniques.",
  },
  {
    id: 7,
    image: uiux,
    courseTitle: "UI/UX",
    aboutCourse:
      "Assess your knowledge of design principles, wireframing, prototyping, and user research with our UI/UX design quizzes.",
  },
];

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} explore-prev`} onClick={onClick}>
      <FaChevronLeft className="left" />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} explore-next`} onClick={onClick}>
      <FaChevronRight className="right" />
    </div>
  );
};

const settings = {
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,

  nextArrow: <NextBtn />,
  prevArrow: <PreviousBtn />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 1,
      },
    },
  ],
};

const PopularCourses = () => {
  return (
    <div className="popular-container">
      <div className="popular-header">
        <h3 className="fw-bold fs-2">Explore Our Most Popular Tech Quizzes</h3>
        <p className=" fw-medium fs-6">
          Not sure where to start? Check out some of our most popular quizzes.
          Whether you want to test your JavaScript skills or dive into machine
          learning, these quizzes are a great way to begin your journey.
        </p>
      </div>
      <div className="popular-courses ">
        <Slider {...settings} className="slider">
          {coursesInfo.map((courses) => {
            const { id, image, courseTitle, aboutCourse } = courses;
            return (
              <div className="popularcourses-item" key={id}>
                <img src={image} alt="coursesimg" className="courseitem-img" />
                <div className="courses-content">
                  <h4 className=" fw-bold">{courseTitle}</h4>
                  <p className=" fw-medium">{aboutCourse}</p>
                  <Link>
                    <button className="explorecourses-btn">
                      Explore Course
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PopularCourses;
