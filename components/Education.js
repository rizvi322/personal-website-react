"use strict";

const { useEffect, useContext } = React;

const Education = () => {
  const { education } = useContext(DataContext);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: "power1.out" },
    });

    timeline.fromTo(
      ".education-content",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    timeline.to(".education-overlay", {
      x: "0%",
      duration: 1,
    });

    timeline.fromTo(
      ".degree",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: -0.25 }
    );
  });

  return (
    <div className="education-content">
      {education.map((degree, index) => {
        return (
          <div className={`degree degree${index + 1}`}>
            <h1>{degree.name}</h1>
            <p>{degree.subject}</p>
            <p>{degree.institute}</p>
          </div>
        );
      })}
      <div className="education-overlay"></div>
    </div>
  );
};
