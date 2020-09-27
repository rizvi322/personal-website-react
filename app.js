"use strict";

const { useState, useEffect } = React;

const App = () => {
  const [data, setData] = useState({});
  const [ready, isReady] = useState(false);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        isReady(true);
      });
  }, []);

  if(ready) {
    return (
      <div className="content">
        <section id="home">
          <nav className="menu-container">
            <ul className="menu">
              <li className="menu-item">
                <a href="#home" className="menu-link">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="#experience" className="menu-link">
                  Experience
                </a>
              </li>
              <li className="menu-item">
                <a href="#education" className="menu-link">
                  Education
                </a>
              </li>
              <li className="menu-item">
                <a href="#about" className="menu-link">
                  About
                </a>
              </li>
            </ul>
          </nav>

          <Home aboutMe={data.aboutMe} experience={data.experience[0]} />
        </section>
        <seciton id="experience"></seciton>
        <section id="education">
          <Education info={data.education} />
        </section>
        <section id="about">
          <About info={data.aboutMe} />
        </section>
      </div>
    );
  }

  return null;
};

ReactDOM.render(<App />, document.querySelector("#app"));
