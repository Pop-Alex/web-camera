import React, { useContext, useState } from "react";
import { ContextApi } from "../context";
import { GiHamburgerMenu } from "react-icons/gi";
const SidebarMenuButton = () => {
  const { open, setOpen } = useContext(ContextApi);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="sidebarMenuButton">
      <button className="sidebar-button" onClick={() => setOpen(!open)}>
        <span
          onClick={handleClick}
          style={{ color: active ? "white" : "gray" }}>
          <GiHamburgerMenu />
        </span>
      </button>
    </div>
  );
};

export default SidebarMenuButton;
