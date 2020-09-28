"use strict";

const { useEffect, useContext } = React;

const Home = () => {
  const { aboutMe, experience } = useContext(DataContext);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

    timeline.fromTo(
      ".home-content",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    timeline.to(".home-overlay", {
      x: "0%",
      duration: 1,
    });

    timeline.fromTo(".summary", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="home-content">
      <div className="summary">
        <h1 className="primary-heading">{aboutMe.name}</h1>
        <h2 className="secondary-heading">
          {experience[0].designation} at {experience[0].name}
        </h2>
        <p className="aim">{aboutMe.aim}</p>
      </div>
      <div className="home-overlay"></div>
    </div>
  );
};
