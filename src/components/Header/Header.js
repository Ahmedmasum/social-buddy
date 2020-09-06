import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <FacebookIcon className="header__icon"></FacebookIcon>
        <YouTubeIcon className="header__icon"></YouTubeIcon>
        <InstagramIcon className="header__icon"></InstagramIcon>

        <GitHubIcon className="header__icon" />
      </div>
      <div className="header__right">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link className="link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
