"use strict";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var controller = new ScrollMagic.Controller();
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

    timeline.fromTo(
      ".about-content",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    timeline.to(".about-overlay", {
      y: "0%",
      duration: 1,
    });

    timeline.fromTo(".about", { opacity: 0 }, { opacity: 1, duration: 1 });
    timeline.to(".about h1", { y: "0%", duration: 1 });
    timeline.to(".about p", { x: "0%", duration: 1, stagger: 0.2 });

    new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: 0.15,
      reverse: false,
    })
      .setTween(timeline)
      .offset(140)
      .addTo(controller);
  }

  render() {
    const { info } = this.props;
    return (
      <div className="about-content">
        <div className="about">
          <h1 className="primary-heading">About Me</h1>
          <p>
            <strong>Full name:</strong>
            {info.name}
          </p>
          <p>
            <strong>Date of birth:</strong>
            {info.dob}
          </p>
          <p>
            <strong>Github profile:</strong>
            <a href={info.github}>{info.github}</a>
          </p>
          <p>
            <strong>Resume:</strong>
            <a href={info.linkedin}>{info.linkedin}</a>
          </p>
          <p>
            <strong>Email address:</strong>
            <a href={`mailto:${info.email}`}>{info.email}</a>
          </p>
        </div>
        <div className="about-overlay"></div>
      </div>
    );
  }
}
