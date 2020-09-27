"use strict";

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var controller = new ScrollMagic.Controller();
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

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
      { opacity: 1, duration: 1, stagger: 0.25 }
    );

    new ScrollMagic.Scene({
      triggerElement: "#education",
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
      <div className="education-content">
        {info.map((degree, index) => {
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
  }
}
