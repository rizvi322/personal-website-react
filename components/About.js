"use strict";

const { useEffect, useContext } = React;

const About = () => {
  const { aboutMe } = useContext(DataContext);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

    timeline.fromTo(
      ".about-content",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    timeline.to(".about-overlay", {
      x: "0%",
      duration: 1,
    });

    timeline.fromTo(".about", { opacity: 0 }, { opacity: 1, duration: 1 });
    timeline.to(".about h1", { y: "0%", duration: 1 });
    timeline.to(".about p", { x: "0%", duration: 1, stagger: 0.2 });
  });

  return (
    <div className="about-content">
      <div className="about">
        <h1 className="primary-heading">About Me</h1>
        <p>
          <strong>Full name:</strong>
          {aboutMe.name}
        </p>
        <p>
          <strong>Date of birth:</strong>
          {aboutMe.dob}
        </p>
        <p>
          <strong>Github profile:</strong>
          <a href={aboutMe.github}>{aboutMe.github}</a>
        </p>
        <p>
          <strong>Resume:</strong>
          <a href={aboutMe.linkedin}>{aboutMe.linkedin}</a>
        </p>
        <p>
          <strong>Email address:</strong>
          <a href={`mailto:${aboutMe.email}`}>{aboutMe.email}</a>
        </p>
      </div>
      <div className="about-overlay"></div>
    </div>
  );
};
