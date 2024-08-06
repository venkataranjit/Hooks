import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const NavBarItems = [
    { menu: "Home", path: "/" },
    { menu: "Props", path: "/propsParent" },
    {
      menu: "Reverse Prop Drilling",
      path: "#",
      subMenu: [
        { menu: "Props Child 1", path: "/propsc1" },
        { menu: "Props Child 2", path: "/propsc2" },
        { menu: "Props Child 3", path: "/propsc3" },
        { menu: "Props Child 4", path: "/propsc4" },
        { menu: "Props Child 5", path: "/propsc5" },
      ],
    },
    {
      menu: "UseState",
      path: "#",
      subMenu: [
        { menu: "BgChange", path: "/bgChange" },
        { menu: "useState1", path: "/useState1" },
        { menu: "useState2", path: "/useState2" },
        { menu: "useState3", path: "/useState3" }
      ],
    },
    {
      menu: "UseEffect",
      path: "#",
      subMenu: [
        { menu: "useEffect1", path: "/useEffect1" }
      ],
    },
    {
      menu: "UseContext",
      path: "#",
      subMenu: [
        { menu: "useContext1", path: "/useContext1" },
        { menu: "useContext2", path: "/useContext2" },
        { menu: "useContext3", path: "/useContext3" },
        { menu: "useContext4", path: "/useContext4" },
        { menu: "useContext5", path: "/useContext5" }
      ],
    },
    {
      menu: "UseRef",
      path: "#",
      subMenu: [
        { menu: "useRef1", path: "/useRef1" },
        { menu: "useRef2", path: "/useRef2" },
        { menu: "useRef3", path: "/useRef3" }
      ],
    },
    {
      menu: "UseMemo",
      path: "#",
      subMenu: [
        { menu: "useMemo1", path: "/useMemo1" },
        { menu: "useMemo2", path: "/useMemo2" }
      ],
    },
    {
      menu: "UseCallBack",
      path: "#",
      subMenu: [
        { menu: "useCallBack1", path: "/useCallBack1" },
        { menu: "useCallBack2", path: "/useCallBack2" }
      ],
    },
    { menu: "Use Reducer", path: "useReducer" },
    {
      menu: "Custom Hook",
      path: "#",
      subMenu: [
        { menu: "customeHooks", path: "/customeHooks" },
        { menu: "customeHooks2", path: "/customeHooks2" },
        { menu: "customeHooks3", path: "/customeHooks3" }
      ],
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Hooks</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {NavBarItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.subMenu ? "dropdown" : ""}`}>
                {item.subMenu ? (
                  <>
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle= "dropdown"
                      aria-expanded="false"
                    >
                      {item.menu}
                    </a>
                    <ul className="dropdown-menu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink 
                            className="dropdown-item"
                            to={subItem.path}
                            end
                          >
                            {subItem.menu}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={item.path}
                    end
                  >
                    {item.menu}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
