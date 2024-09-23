import React from "react";
import "./Testimonial.css";
import man1 from "./images/man1.jpg"
import woman2 from "./images/woman2.jpg"
import man2 from "./images/man2.jpg"

const testimonialList = [
  {
    id: 1,
    image: man1,
    testi:
      "The quizzes are challenging and really help me stay sharp. I love the detailed feedback!",
    name: "John Doe, Web Developer",
  },
  {
    id: 2,
    image: woman2,
    testi:
      "I use this app regularly to test my data science knowledge. It’s a fantastic learning tool.",
    name: "Jane Smith, Data Scientist",
  },
  {
    id: 3,
    image: man2,
    testi:
      "The interactive quizzes make learning so much fun! Highly recommend it to anyone looking to improve their tech skills.",
    name: "Michael Johnson, UI/UX Designer",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <header className="testi-header">
        <h3 className="fw-bold fs-2">What our Users are Saying</h3>
        <p className="fw-medium fs-5">
          Hear from tech enthusiasts who have leveled up their skills with our
          app.
        </p>
      </header>
      <div className="testimonial-content d-flex flex-lg-row  align-items-center justify-content-center gap-4">
        {
          testimonialList.map((testimonai) => {
            const { id, testi, name, image} = testimonai
            return (
              <div className="testimonial-item d-flex flex-column align-items-center gap-2 shadow" key={id}>
                <div className="testi-imgcontainer">
                  <img src={image} alt="testiimg" className="testi-img" />
                </div>
                <div className="test-listcontent">
                  <p className="fw-light">{testi}</p>
                  <h4 className="fw-medium fs-5">{name}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Testimonial;
