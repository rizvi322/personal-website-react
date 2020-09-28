"use strict";

const { useEffect, useContext } = React;
const mdConverter = new showdown.Converter();

const Experience = () => {
  const { experience } = useContext(DataContext);

  const loadJobDescription = async (job, container) => {
    if (job.expFile) {
      const result = await fetch("../markdowns/" + job.expFile);
      const markdownText = await result.text();

      if (markdownText) {
        container.innerHTML = mdConverter.makeHtml(markdownText);
      } else {
        container.innerHTML = `<p>Not available.</p>`;
      }
    } else {
      container.innerHTML = `<p>${job.responsibility}</p>`;
    }
  };

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

    timeline.fromTo(
      ".experience-content",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    timeline.to(".experience-overlay", {
      x: "0%",
      duration: 1,
    });

    timeline.fromTo(
      ".job",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.5 }
    );

    timeline.fromTo(
      ".job-description",
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    loadJobDescription(
      experience[0],
      document.querySelector(".job-description")
    );
  });

  return (
    <div className="experience-content">
      <div className="jobs">
        {experience.map((job, index) => (
          <div
            className="job"
            onClick={() =>
              loadJobDescription(
                job,
                document.querySelector(".job-description")
              )
            }
          >
            <h1>{job.name}</h1>
            <h2>{job.designation}</h2>
            <h3>{job.since}</h3>
          </div>
        ))}
      </div>
      <div className="job-description"></div>
      <div className="experience-overlay"></div>
    </div>
  );
};
