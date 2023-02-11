import React, { useState } from "react";
// import '../sass/main.scss'

const About = () => {
  const [section] = useState([
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
      ),
      heading: "Digital Marketing",
      text: "Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-phone"
          viewBox="0 0 16 16"
        >
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      ),
      heading: "Web and App Development",
      text: "Web development is the work involved in developing a website for the Internet or an intranet.",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-window-split"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
          <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2Zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12ZM1 13V6h6.5v8H2a1 1 0 0 1-1-1Zm7.5 1V6H15v7a1 1 0 0 1-1 1H8.5Z" />
        </svg>
      ),
      heading: "Graphic Designing",
      text: "Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups.",
    },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 className="about__h4">Who we are?</h4>
          </div>
          <div className="col-9">
            <div className="about__text">
              <p>
                A Web Developer is a professional who is responsible for the
                design and construction of websites. They ensure that sites meet
                user expectations by ensuring they look good, run smoothly and
                offer easy access points with no loading issues between pages or
                error messages. A Web Developer is a professional who is
                responsible for the design and construction of websites. They
                ensure that sites meet user expectations by ensuring they look
                good, run smoothly and offer easy access points with no loading
                issues between pages or error messages.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          {section.map((section) => {
            return (
              <div className="col-4 pl-15" key={section.id}>
                <div className="about__section h-350">
                  <div className="about__section-icon">{section.icon}</div>
                  <div className="about__section-heading">
                    <h6>{section.heading}</h6>
                  </div>
                  <div className="about__section-text">
                    <p>{section.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
