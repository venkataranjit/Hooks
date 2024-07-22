import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavBarItems = [
    { menu: "Home", path: "/" },
    {
      menu: "Props Main",
      path: "#",
      subMenu: [
        { menu: "Props Child 1", path: "/propsc1" },
        { menu: "Props Child 2", path: "/Propsc2" },
        { menu: "Props Child 3", path: "/Propsc3" },
        { menu: "Props Child 4", path: "/Propsc4" },
        { menu: "Props Child 5", path: "/Propsc5" },
      ],
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="\">
          Hooks
        </a>colorPicker2
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="\navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {NavBarItems.map((item, index) =>
              item.subMenu ? (
                <>
                  <li
                    key={index}
                    class={`nav-item ${item.subMenu ? "dropdown" : ""} `}
                  >
                    <a
                      class="nav-link dropdown-toggle"
                      href="\"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.menu}
                    </a>
                    <ul class="dropdown-menu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a class="dropdown-item" href="\">
                            {subItem.menu}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">
                      {item.menu}
                    </a>
                  </li>
                </>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
