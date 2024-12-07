import React, { useEffect } from "react";
import RoutingFile from "../../singles/RoutingFile";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
const Design = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  const handleSerach = () => {
    navigate("/store");
  };
  return (
    <>
      <Outlet />
      <RoutingFile />
      <section className="design-section">
        <div className="design-container">
          <div className="row">
            {/* Left side with the image */}
            <div className="col-6">
              <div className="design-image  ">
                <img
                  src="https://cdn.dribbble.com/users/364593/screenshots/6244004/preview.gif"
                  alt="Head and bulb"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="design-text">
                <h4 className="section-title " style={{ fontWeight: "bold" }}>
                  DESIGN
                </h4>
                <nav className="breadcrumb ">
                  <div className="row w-100">
                    <div className="col-4">
                      <span>Home</span>
                    </div>
                    <div className="col-4">
                      <span> •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services</span>
                    </div>
                    <div className="col-4 ">
                      <span> •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design</span>
                    </div>
                  </div>
                </nav>
                <h1 className="main-text">
                  We create designs to augment User Experiences.
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with the text */}
      </section>

      <div className="section3 d-flex flex-column justify-content-center align-content-center align-items-center w-100   ">
        <div className="title  " data-aos="fade-up">
          HOW WE DO IT ?
        </div>
        <div className="title  " data-aos="fade-down">
          Leaving no stone unturned at every step.
        </div>

        <div className="cards d-flex flex-lg-wrap justify-content-start gap-5 ms-3 align-content-center align-items-center ">
          <div
            className="card my-2"
            style={{ width: "35rem" }}
            data-aos="fade-right"
          >
            <div className="d-flex justify-content-start ms-5 my-3 ">
              <img
                src="https://i.gifer.com/embedded/download/3BA4.gif"
                class="card-img-top"
                alt="..."
                style={{ width: "40%" }}
              />
            </div>

            <div class="card-body">
              <h1 class="card-title">Empathise</h1>
              <h5 class="card-text">
                As a thriving UI UX agency, we harness the proven empathy-driven
                human-focused design process to craft the best digital solutions
                mapping the users preferences.
              </h5>
            </div>
          </div>
          {/* card2 */}
          <div
            className="card my-2"
            style={{ width: "35rem" }}
            data-aos="fade-left"
          >
            <div className="d-flex justify-content-start ms-5 my-3 ">
              <img
                src="https://cdn.dribbble.com/users/1473736/screenshots/4106177/logo-animated.gif"
                className="card-img-top"
                alt="..."
                style={{ width: "40%" }}
              />
            </div>

            <div className="card-body">
              <h1 className="card-title">Define ( the Problem)</h1>
              <h5 className="card-text">
                Apt logic and detailing is incorporated precisely with elements
                like design functions, features, functionalities, workflow and
                beyond to solve complex issues with minimal snags.
              </h5>
            </div>
          </div>
          {/* card3 */}
          <div
            className="card my-2"
            style={{ width: "35rem" }}
            data-aos="fade-up"
          >
            <div className="d-flex justify-content-start ms-5 my-3 ">
              <img
                src="https://i.gifer.com/embedded/download/3BA4.gif"
                className="card-img-top"
                alt="..."
                style={{ width: "40%" }}
              />
            </div>

            <div className="card-body">
              <h1 className="card-title">Ideation</h1>
              <h5 className="card-text">
                With Proven ideation techniques combined with a client-centric
                approach at the core, we ideate roadmaps while mapping your
                business journey to decode human-focused problem statements.
              </h5>
            </div>
          </div>
          {/* card4 */}
          <div
            className="card my-2"
            style={{ width: "35rem" }}
            data-aos="fade-down"
          >
            <div className="d-flex justify-content-start ms-5 my-3 ">
              <img
                src="https://cdn.dribbble.com/users/364593/screenshots/6244004/preview.gif"
                className="card-img-top"
                alt="..."
                style={{ width: "40%" }}
              />
            </div>

            <div className="card-body">
              <h1 className="card-title">Prototype</h1>
              <h5 className="card-text">
                We develop a results-focused prototype meant to build an
                authentic digital connection with the utmost level of detail and
                quality based on diversified experiments.
              </h5>
            </div>
          </div>
          {/* card5 */}
          <div
            className="card my-2"
            style={{ width: "35rem" }}
            data-aos="fade-up"
          >
            <div className="d-flex justify-content-start ms-5 my-3">
              <img
                src="https://blog.hubspot.com/hubfs/26%20Animated%20Logos%20to%20Inspire%20Your%20Own-12.gif"
                className="card-img-top"
                alt="..."
                style={{ width: "40%" }}
              />
            </div>

            <div className="card-body">
              <h1 className="card-title">Testing</h1>
              <h5 className="card-text">
                We finetune our designs using state-of-the-art testing
                techniques by testing the overall product usability at
                Omni-channel platforms to impart a clear big picture of design
                experience benchmarking, blueprints, personas, and journey maps
                of ideal consumers.
              </h5>
            </div>
          </div>
        </div>
        {/* card1 */}
      </div>
      <div className="title ms-5" data-aos="fade-up">
        <a href="">To know more read our blog </a>
      </div>
      <section className="ToolsWeUse " data-aos="fade-up">
        <h1 className="text-center my-5 fw-bold">Tools We USe</h1>
        <div className="container">
          <div className="row justify-content-center align-content-center align-items-center">
            <div className="col-3  p-5 mx-4  my-2  border ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968520.png"
                alt=""
              />
            </div>
            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5611/5611037.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5611/5611129.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                src="https://cdn-icons-png.flaticon.com/128/186/186300.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4 my-2 border ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1409/1409945.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="travelxp-container section150 ms-5 " data-aos="fade-up">
          {/* Title Section */}
          <h1 className="heading">Design</h1>

          {/* Image Banner */}
          <div className="image-banner">
            <img
              src="https://wallpaperaccess.com/full/1510405.jpg"
              alt="Travelxp Banner"
              className="banner-img"
            />
          </div>

          {/* Content Section */}

          {/* List Section */}
          <div className="list-section text-start mt-3">
            <h2>Travelxp</h2>
            <div className="content-section">
              <p>
                Created great experience for clients looking to book holidays.
              </p>
            </div>
            <ul className="platform">
              <li>UI-UX</li>
              <li>Web</li>
              <li>Mobile</li>
              <li>Branding</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="morecards ms-5 my-5 section150 ">
          <div className="title">
            <h1 className="heading text-center">Other services</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-5">
              <div>
                <Link class="card" to="/service/technology">
                  <div class="card-body tech">
                    <h1> Technology.</h1>
                    <div className="row justify-content-between">
                      <div className="col-8">
                        <p> Leverage the power of code.</p>
                      </div>
                      <div className="col-2 ">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
                          alt=""
                          width={"50%"}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* markting */}
            <div className="col-5">
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
                          width={"50%"}
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
      <Footer value={true} />
    </>
  );
};
//  <section className="how-we-do-it">
//         <h4 className="subheading">HOW WE DO IT?</h4>
//         <h1 className="title">Leaving no stone unturned at every step.</h1>
//         <div className="steps-container">
//           {/* Empathise Section */}
//           <div className="step">
//             <img
//               src="https://image.shutterstock.com/image-vector/document-search-line-icon-outline-260nw-1450146737.jpg"
//               alt="Empathise Icon"
//               className="icon"
//             />
//             <h3>Empathise</h3>
//             <p>
//               As a thriving UI UX agency, we harness the proven empathy-driven
//               human-focused design process to craft the best digital solutions
//               mapping the users' preferences.
//             </p>
//           </div>
//           {/* Define Section */}
//           <div className="step">
//             <img
//               src="https://image.shutterstock.com/image-vector/brain-gear-cog-wheel-engineering-260nw-1410171159.jpg"
//               alt="Define Icon"
//               className="icon"
//             />
//             <h3>Define (the Problem)</h3>
//             <p>
//               Apt logic and detailing is incorporated precisely with elements
//               like design functions, features, functionalities, workflow and
//               beyond to solve complex issues with minimal snags.
//             </p>
//           </div>
//         </div>
//       </section>

export default Design;
