import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Footer = ({ value }) => {
  return (
    <>
      {value && (
        <div className="footer">
          <section className="quote">
            <h1>Let’s create a measurable impact on your business.</h1>
            <button className="quoteButton1">
              <Modal />
            </button>
          </section>
        </div>
      )}

      <section className="bottomFooter">
        <div className="row">
          {/* Footer Logo and Social Media */}
          <div className="col-3 footerLogo">
            <img
              src="https://th.bing.com/th/id/OIP.14wEUWaBPPcTMwkYc4vNpgHaE8?rs=1&pid=ImgDetMain"
              width="50%"
              alt="Company Logo"
            />
            <div className="socialMedia">
              {[
                "https://cdn-icons-png.flaticon.com/128/733/733547.png",
                "https://cdn-icons-png.flaticon.com/128/3256/3256013.png",
                "https://cdn-icons-png.flaticon.com/128/5968/5968830.png",
                "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
                "https://cdn-icons-png.flaticon.com/128/3938/3938026.png",
              ].map((icon, index) => (
                <a href="#" key={index}>
                  <img src={icon} alt={`Social icon ${index}`} width="50%" />
                </a>
              ))}
            </div>
            <div className="address">
              <p>
                © AlphaX Innovations. <br /> All rights reserved 2023
              </p>
            </div>
          </div>

          {/* Footer Links Sections */}
          {[
            {
              title: "Services",
              links: [
                "Design",
                "Technology",
                "Neuromarketing",
                "Digital Marketing",
              ],
            },
            {
              title: "About",
              links: ["About Us", "Team", "Career", "Clients"],
            },
            {
              title: "Quick Links",
              links: ["Work", "Blog", "Reach Us", "Site Map"],
            },
            {
              title: "Policies",
              links: [
                "Privacy Policy",
                "Terms of Use",
                "Refund Policy",
                "Copyright Policy",
              ],
            },
          ].map((section, index) => (
            <div className="col-2 links" key={index}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Footer;
