import React from "react";
import "./Header.scss";
import { IoMdPersonAdd } from "react-icons/io";
import { FaHome,FaBell } from "react-icons/fa";
import { TiThLarge } from "react-icons/ti";
const Header = () => {
  return (
    <div className="header-wrapper">
      <div>
        <TiThLarge />
      </div>
      <div>
        <FaHome />
      </div>
      <div className="anim">
        <FaBell  />
      </div>
      <div>
        <IoMdPersonAdd />
      </div>
    </div>
  );
};

export default Header;
