import React, { useEffect } from "react";

const PropsChild = ({ onDataSend }) => {
    const NavBarItems = [
        { menu: "Home", path: "/" },
        { menu: "Props", path: "/propsParent" }
      ];


  useEffect(() => {
    onDataSend(NavBarItems);
  }, [onDataSend]);

  return (
    <>
      <div style={{ border: "1px solid #333" }}>
        <h6>This is child Component</h6>
      </div>
    </>
  );
};

export default PropsChild;
