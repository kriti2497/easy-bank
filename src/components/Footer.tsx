import facebook from "../assets/images/icon-facebook.svg";
import facebookhover from "../assets/images/icon-facebook-hover.svg";
import instagram from "../assets/images/icon-instagram.svg";
import instagramhover from "../assets/images/icon-instagram-hover.svg";
/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../assets/images/logo-light.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
/* eslint-disable @typescript-eslint/no-explicit-any */
import pinteresthover from "../assets/images/icon-pinterest-hover.svg";
import twitter from "../assets/images/icon-twitter.svg";
import twitterhover from "../assets/images/icon-twitter-hover.svg";
import { useState } from "react";
import youtube from "../assets/images/icon-youtube.svg";
import youtubehover from "../assets/images/icon-youtube-hover.svg";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const imgsArr = [
    {
      link: "https://www.facebook.com/",
      icon: facebook,
      hoverIcon: facebookhover,
    },
    {
      link: "https://www.youtube.com/",
      icon: youtube,
      hoverIcon: youtubehover,
    },
    {
      link: "https://www.twitter.com/",
      icon: twitter,
      hoverIcon: twitterhover,
    },
    {
      link: "https://www.pinterest.com/",
      icon: pinterest,
      hoverIcon: pinteresthover,
    },
    {
      link: "https://www.instagram.com/",
      icon: instagram,
      hoverIcon: instagramhover,
    },
  ];
  return (
    <div className="footer">
      <div className="footer-logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="social-handles">
        {imgsArr.map((eachSocial: any) => (
          <a href={eachSocial.link} key={eachSocial.link}>
            <img
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              src={hovered ? eachSocial.hoverIcon : eachSocial.icon}
              alt="logo"
            />
          </a>
        ))}
      </div>
      <div className="footer-links section1">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>
      <div className="footer-links section2">
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="invite-bnt">
        <button type="button">Request Invite</button>
      </div>
      <div className="invite-details">
        <p>&copy; Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
