"use strict";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
    timeline.fromTo(
      ".menu-item",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.25 },
      "-=1"
    );
  }

  render() {
    const { aboutMe, experience } = this.props;
    return (
      <div className="home-content">
        <div className="summary">
          <h1 className="primary-heading">{aboutMe.name}</h1>
          <h2 className="secondary-heading">
            {experience.designation} at {experience.name}
          </h2>
          <p className="aim">{aboutMe.aim}</p>
        </div>
        <div className="home-overlay"></div>
      </div>
    );
  }
}
