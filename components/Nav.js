"use strict";

const Nav = () => {
  const { Link, useLocation } = ReactRouterDOM;
  const { useEffect } = React;

  const menuItems = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/experience",
      label: "Experience",
    },
    {
      path: "/education",
      label: "Education",
    },
    {
      path: "/about",
      label: "About Me",
    },
  ];

  const location = useLocation();
  let nextPageIndex = -1;
  let previousPageIndex = -1;

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

    timeline.fromTo(
      ".menu-item",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.25, delay: 3 }
    );
    timeline.fromTo(
      ".next-page",
      { x: "200%" },
      { x: "0%", duration: 1 },
      "-=1"
    );
    timeline.fromTo(
      ".previous-page",
      { x: "-200%" },
      { x: "0%", duration: 1 },
      "-=1"
    );
  }, [location]);

  return (
    <React.Fragment>
      <nav className="menu-container">
        <ul className="menu">
          {menuItems.map((menuItem, index) => {
            let linkClass = `menu-link ${menuItem.label
              .toLowerCase()
              .replace(" ", "-")}`;
            if (location.pathname === menuItem.path) {
              linkClass = `${linkClass} active`;
              nextPageIndex = index + 1 >= menuItems.length ? -1 : index + 1;
              previousPageIndex = index - 1;
            }

            return (
              <li className="menu-item">
                <Link to={menuItem.path} className={linkClass}>
                  {menuItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {(() => {
        if (nextPageIndex > -1) {
          const nextItem = menuItems[nextPageIndex];
          return (
            <Link to={nextItem.path} className="next-page">
              {`${nextItem.label} >>`}
            </Link>
          );
        }
      })()}

      {(() => {
        if (previousPageIndex > -1) {
          const previousItem = menuItems[previousPageIndex];
          return (
            <Link to={previousItem.path} className="previous-page">
              {`<< ${previousItem.label}`}
            </Link>
          );
        }
      })()}
    </React.Fragment>
  );
};
