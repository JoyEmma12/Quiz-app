import React from "react";
import "./Faq.css";

const FaqList = [
  {
    id: 1,
    title: "What types of quizzes are available?",
    item: "We offer quizzes in various tech domains including web development, data science, cybersecurity, and more.",
  },
  {
    id: 2,
    title: "Is this app suitable for beginners?",
    item: "Yes, we have quizzes ranging from beginner to advanced levels to suit everyone’s needs.",
  },
  {
    id: 3,
    title: "Can I track my progress?",
    item: "Absolutely! You can monitor your performance and see your improvement over time.",
  },
];

const Faq = () => {
  return (
    <div className="faq-container container-fluid">
      <header className="faq-header text-center">
        <h3 className=" fs-2 fw-bold">Frequently Asked Questions</h3>
        <p className=" fs-5 fw-medium">Got Questions? We've got answers.</p>
      </header>
      <div className="faq-content">
        {FaqList.map((list) => {
          const { id, title, item } = list;
          return (
            <div
              key={id}
              className="accordion accordion-flush faq-maincontent"
              id={`accordionPanelsStayOpenExample-${id}`}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={`heading-${id}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#panelsStayOpen-collapse-${id}`}
                    aria-expanded="false"
                    aria-controls={`panelsStayOpen-collapse-${id}`}>
                    {title}
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse-${id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading-${id}`}
                  data-bs-parent={`#accordionPanelsStayOpenExample-${id}`}>
                  <div className="accordion-body">{item}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Faq;
