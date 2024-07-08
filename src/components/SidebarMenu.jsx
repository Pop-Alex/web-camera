import React, { useContext } from "react";
import { ContextApi } from "../context";
import cn from "classnames";
import { Link } from "react-scroll";

const internalLinks = [
  {
    url: "#1",
    component: (
      <Link to="highlights" spy={true} smooth={true} offset={50} duration={500}>
        <span>High</span>
      </Link>
    ),
    img: "https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
  {
    url: "#2",
    component: (
      <Link to="demo" spy={true} smooth={true} offset={50} duration={500}>
        <span>Demo</span>
      </Link>
    ),
    img: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80",
  },
];

const SidebarMenu = () => {
  const { open } = useContext(ContextApi);
  console.log(open);
  return (
    <div className="sidebarmenu">
      <div className={cn("menu-info", { open })}>
        <div className="menu-container">
          <ul className="links">
            {internalLinks.map((item) => {
              return (
                <li key={item.url}>
                  <a href={item.url}>{item.component}</a>
                  <img src={item.img} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
