import React, { useState } from "react";
import Link from "next/link";
import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [programsDropDown, setProgramsDropDown] = useState(false);
  const [mediaDropDown, setMediaDropDown] = useState(false);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          style={{ width: "40%" }}
          href="https://empoweringconfidentyouth.com/"
        >
          <img
            src="https://empoweringconfidentyouth.com/wp-content/uploads/2020/12/Brand-New-Logo.png"
            style={{ width: "90%" }}
            alt="Empowering Confident Youth"
            id="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav main-bar">
            <li className="nav-item">
              <Link href="/about-us">
                <a className="nav-link">About Us</a>
              </Link>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={() => setProgramsDropDown(true)}
              onMouseLeave={() => setProgramsDropDown(false)}
            >
              <a
                className="nav-link dropdown-toggle"
                href="javascript:void(0)"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Programs
              </a>
              <ul
                className={`dropdown-menu dropdown-menu ${
                  programsDropDown && "show"
                }`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link href="/elementary-school-sel-curriculum">
                    <a className="dropdown-item">
                      Elementary School SEL Curriculum
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/middle-school-sel-curriculum">
                    <a className="dropdown-item">
                      Middle School SEL Curriculum
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/high-school-sel-curriculum">
                    <a className="dropdown-item">High School SEL Curriculum</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/our-team">
                <a className="nav-link">Our Team</a>
              </Link>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={() => setMediaDropDown(true)}
              onMouseLeave={() => setMediaDropDown(false)}
            >
              <Link href="/our-team">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Media
                </a>
              </Link>
              <ul
                className={`dropdown-menu dropdown-menu ${
                  mediaDropDown && "show"
                }`}
                style={{ width: 220 }}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link href="/press">
                    <a className="dropdown-item">Press</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs">
                    <a className="dropdown-item">Blogs</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="https://learning.empoweringconfidentyouth.com/login/">
                <a className="nav-link">
                  <FontAwesomeIcon icon={faUser} />
                  <span style={{ marginLeft: 4 }}>Login</span>
                </a>
              </Link>
            </li>
            <li className="ps-4">
              <button type="button" className="request_btn nav-btn">
                <FontAwesomeIcon icon={faEdit} />
                <span style={{ marginLeft: 4 }}>Request Info</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
