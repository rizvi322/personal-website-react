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

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

    timeline.fromTo(
      ".menu-item",
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.25, delay: 3 }
    );
  }, [location]);

  useEffect(() => {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu-container");
    const menuLinks = document.querySelectorAll(".menu-link");

    burger.addEventListener("click", () => {
      menu.classList.toggle("menu-active");
      burger.classList.toggle("burger-active");
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("menu-active");
        burger.classList.remove("burger-active");
      });
    });
  }, []);

  const location = useLocation();

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

      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </React.Fragment>
  );
};
