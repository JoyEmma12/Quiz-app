import React from "react";
import HeroPage from "./HeroPage";
import Features from "./Features";
import PopularCourses from "./PopularCourses";
import Testimonial from "./Testimonial";
import Action from "./Action";
import Faq from "./Faq"

const LandingPage = () => {
  return (
    <div>
      <HeroPage />
      <Features />
      <PopularCourses />
      <Testimonial />
      <Action />
      <Faq />
    </div>
  );
};

export default LandingPage;
