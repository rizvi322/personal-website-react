"use strict";

const { useEffect, useContext } = React;
const mdConverter = new showdown.Converter();

const Experience = () => {
  const { experience } = useContext(DataContext);

  const loadJobDescription = async ({ job, shouldRender = true, event }) => {
    const jobDescription = document.querySelector(".job-description");
    const jdCloseButton = document.querySelector(".jd-close");
    const jobDivs = document.querySelectorAll(".job");

    if (job.expFile) {
      const result = await fetch("../markdowns/" + job.expFile);
      const markdownText = await result.text();

      if (markdownText) {
        jobDescription.innerHTML = mdConverter.makeHtml(markdownText);
      } else {
        jobDescription.innerHTML = `<p>Not available.</p>`;
      }
    } else {
      jobDescription.innerHTML = `<p>${job.responsibility}</p>`;
    }

    jobDivs.forEach((jobDiv) => {
      jobDiv.classList.remove("job-active");
    });

    if (event && event.target) {
      event.target.classList.add("job-active");
    } else {
      jobDivs[0].classList.add("job-active");
    }

    if (shouldRender) {
      jobDescription.classList.add("jd-active");
      jdCloseButton.classList.add("jd-active");
    }
  };

  const closeJobDescription = () => {
    document.querySelector(".job-description").classList.remove("jd-active");
    document.querySelector(".jd-close").classList.remove("jd-active");
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

    loadJobDescription({ job: experience[0], shouldRender: false });
  });

  return (
    <div className="experience-content">
      <div className="jobs">
        {experience.map((job, index) => (
          <div
            className="job"
            onClick={(event) => loadJobDescription({ job, event })}
          >
            <h1>{job.name}</h1>
            <h2>{job.designation}</h2>
            <h3>{job.since}</h3>
          </div>
        ))}
      </div>
      <div className="job-description"></div>
      <div className="jd-close" onClick={() => closeJobDescription()}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="experience-overlay"></div>
    </div>
  );
};
