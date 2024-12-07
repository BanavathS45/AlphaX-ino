import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useDarkMode from "../AlphaX/THeme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../AlphaX/Services/design.css";

const RoutingFile = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBar = () => {
    setIsMobileMenuOpen(true); // Open mobile menu
  };

  const handleCancel = () => {
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <div>
        <section id="header">
          {/* <!-- Logo Section --> */}
          <Link to="/" className="logo">
            <p>
              Alpha <span>X</span> Innovations
            </p>
          </Link>

          {/*<!-- Nav Bar Section --> */}
          <div className="dropdown-container">
            <ul id="navbar" className={isMobileMenuOpen ? "active" : ""}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="w-100">
                <NavLink
                  to="/design"
                  onMouseEnter={() => setShowDropdown(!showDropdown)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>

              {/* Dark mode toggle */}
              <div className="theme-toggle-button" onClick={toggleDarkMode}>
                {darkMode ? (
                  <FontAwesomeIcon icon={faMoon} className="fasun" />
                ) : (
                  <FontAwesomeIcon icon={faSun} className="fasun" />
                )}
              </div>

              {/*<!-- Cancel Button --> */}
              <Link to="#" id="close" onClick={handleCancel}>
                <i className="fa fa-times"></i>
              </Link>
            </ul>
          </div>

          {/* <!-- Mobile Menu Version --> */}
          <div id="mobile">
            <i
              id="bar"
              className="fa fa-bars"
              title="Menu"
              onClick={handleBar}
            ></i>
          </div>
        </section>
      </div>
      {showDropdown && (
        <section className="w-100  morecards3">
          <div className="morecards  ">
            <div className="row justify-content-center">
              <div className="col-3">
                <div>
                  <Link to="/service">
                    <div class="card">
                      <div class="card-body tech  ">
                        <h1> Design.</h1>
                        <div className="row justify-content-between">
                          <div className="col-8">
                            <p> Leverage the power of code.</p>
                          </div>
                          <div className="col-2 ">
                            <img
                              src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
                              alt=""
                              width={"100%"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* markting */}
              <div className="col-3">
                <div>
                  <Link to="service/technology" class="card">
                    <div class="card-body marketing">
                      <h1> Technology.</h1>
                      <div className="row justify-content-between">
                        <div className="col-8">
                          <p> Creative strategies for brands.</p>
                        </div>
                        <div className="col-2 ">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
                            alt=""
                            width={"100%"}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-3">
                <div>
                  <Link class="card" to="service/marketing">
                    <div class="card-body marketing">
                      <h1> Marketing.</h1>
                      <div className="row justify-content-between">
                        <div className="col-8">
                          <p> Creative strategies for brands.</p>
                        </div>
                        <div className="col-2 ">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
                            alt=""
                            width={"100%"}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RoutingFile;
