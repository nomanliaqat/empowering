import React from "react";
import { faArrowRight, fa } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const links = [
    { name: "About Us", href: "" },
    { name: "Elementary School", href: "" },
    { name: "Middle School", href: "" },
    { name: "High School", href: "" },
    { name: "Contact", href: "" },
  ];
  return (
    <footer className="main-footer">
      <div className="position-relative">
        <div className="row footer-content">
          <div className="col-sm-12 col-md-6 col-lg-6 text-white">
            <h2 className="footer-title">WHAT WE STAND FOR</h2>
            <p className="fs-5 lh-base f-desc ">
              Our mission is to empower elementary, middle and high school youth
              to develop a solid sense of self and purpose so they are able to
              shape a future based on their own identity, passion, and
              entrepreneurial vision. Our modern program model is designed to
              build a strong foundation of self-confidence, purpose, and an
              entrepreneurial spirit, which will help young people achieve a
              bright future.
            </p>
            <div>
              <h3>OUR SOCIAL MEDIA</h3>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 text-white">
            <h2 className="footer-title">QUICK LINKS</h2>
            <div className="menu">
              <ul>
                {links.map((l, i) => (
                  <li key={i} className="mt-2">
                    <a className="footer-links">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#ff7355", fontSize: 16 }}
                      />
                      <span className="m-3">{l.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 text-white">
            <h2 className="footer-title">NEWSLETTER</h2>
            <div className="mt-5 w-75">
              <input
                id="firstname"
                className="input-field news-field"
                type="text"
                placeholder="First Name"
                name="firstname"
              />
              <input
                id="email"
                className="input-field news-field"
                type="email"
                placeholder="Email Address"
                name="email"
              />
              <button
                type="submit"
                className="input-field news-field subscribe-btn"
              >
                {" "}
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-12 footer-bottom">
            <div className="rights align-content-center justify-content-center">
              <p>
                ©2021 Empowering Confident Youth. All rights reserved.&nbsp;{" "}
              </p>
              <div className="rules">
                <a>Terms of Service | &nbsp;</a>
                <a>Privacy Policies | &nbsp;</a>
                <a>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
