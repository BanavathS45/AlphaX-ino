import React, { useEffect } from "react";
import RoutingFile from "../../singles/RoutingFile";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import RiseLoader from "react-spinners/RingLoader";
import { teal } from "@mui/material/colors";
const Technology = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();
  const handleSerach = () => {
    navigate("/store");
  };
  let data = [
    {
      image:
        "https://png.pngtree.com/png-vector/20221124/ourmid/pngtree-edit-save-isolated-pen-vector-png-image_34756624.png",
      title: "Understand Objectives",
      description:
        "As a client-focused web and mobile app development company, we gain in-depth insights into your digital requirements, consumer behaviours, technology platforms, functionalities, etc., to help you gain a competitive edge. This is our approach for developing the right user experience, emphasising top-notch aesthetic               sensibilities that engage your consumers.",
    },
    {
      image:
        "https://cdn1.iconfinder.com/data/icons/seo-web-design-4/64/design-web-seo-website-pen-edit-browser-512.png",
      title: "Choose Right ​​​​​​​Technology",
      description:
        "Empowered with tech-heavy centricity, our solutions transcend the usual methods of solving problems. We ensure a sophisticated frontend experience and develop a user-friendly backend by considering the bigger picture for tech-focused digital transformation that was once impossible.",
    },
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/ecommerce-551/64/blogging_web_content_media_digital-512.png",
      title: "Documented Coding",
      description:
        "From elegant designs to a custom-coded website, the radical development phase is driven by our digital mindfulness to translate your digital vision.",
    },
    {
      image:
        "https://cdn3.iconfinder.com/data/icons/graphic-design-171/64/web_pen_tool_graphic_design_browser_vector-512.png",
      title: "Careful Testing",
      description:
        "With our great knowledge in tech engineering, we employ a rigorous QA testing process that encompasses testing speed, security, user-friendly interface experience, and overall functionality and eliminates flaws before the product goes live.",
    },
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/design-thinking-94/64/1_13._web_design_layout_development_programming_interface-512.png",
      title: "Successful Deployment",
      description:
        "When you decide to work with a thriving web and mobile app development company like us, you unlock the best tech-driven solutions that stand the test of time across multiple environments, including staging and production.",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.duKUv0gkf5hBBaVrhB2AqAHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
      title: "AMC Support",
      description:
        "Our technology experts are conversant with cutting-edge technology and software trends, maintaining a website and ensuring smooth app performance. Moreover, our foolproof AMC support lends best-in-class customer assistance equipped with hassle-free backend integration for our esteemed patrons.",
    },
  ];

  return (
    <>
      <RoutingFile />
      <section className="design-section">
        <div className="design-container">
          <div className="row">
            {/* Left side with the image */}
            <div className="col-6">
              <div className="design-image  ">
                <img
                  src="https://merida.anahuac.mx/hs-fs/hubfs/apreu/Blog/2019%20Blog%20APREU/APREU%20Blog%20-%20Abril%2019/dribbble-shot_6.gif?width=1600&name=dribbble-shot_6.gif"
                  alt="Head and bulb"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="design-text">
                <h4
                  className="section-title "
                  style={{ fontWeight: "bold", color: "brown" }}
                >
                  Neuromarketing
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
                      <span>
                        {" "}
                        •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neuromarketing
                      </span>
                    </div>
                  </div>
                </nav>
                <h1 className="fw-bold">
                  Designing brand perceptions with neuromarketing and behavioral
                  science to enhance customer experiences.
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with the text */}
      </section>
      {/* <section className="design-section" data-aos="fade-up">
        <div className="design-container">
          <div className="row">
           

            <div className="col-12">
              <div className="design-text">
                <h4
                  className="section-title "
                  style={{ fontWeight: "bold", color: "teal" }}
                >
                  Neuromarketing
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
                      <span>
                        {" "}
                        •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neuromarketing
                      </span>
                    </div>
                  </div>
                </nav>
                <h1 className="main-text ">Decoding the power of coding</h1>
                <h2 style={{ fontWeight: "bold" }} className="mt-4">
                  We design to empower human experiences.
                </h2>
              </div>
            </div>
          </div>
        </div>

      
      </section> */}

      <div className="section3  d-flex flex-column justify-content-start align-content-start align-items-start w-100   ">
        <div
          className="title ps-5"
          data-aos="fade-up"
          style={{ color: "brown" }}
        >
          What do we serve ?
        </div>
        {/* circle-background */}
        <div className="ps-5 mt-5 mb-5 " data-aos="fade-down">
          <h1 className="main-text">
            End-to-end neuromarketing services and branding strategies of the
            digital world.
          </h1>
        </div>

        <div
          className="w-100 ms-5 d-flex flex-wrap justify-content-center  "
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <div className="col-12 col-md-4 technologies" data-aos="fade-right">
            <ul className="list-unstyled">
              <li>
                <Link className="tech-link mb-4">
                  <h2>Email Marketing</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>ASO</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>Content Marketing</h2>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 technologies" data-aos="fade-right">
            <ul className="list-unstyled">
              <li>
                <Link className="tech-link mb-4">
                  <h2>PPC Campaign</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>Video Marketing</h2>
                </Link>
              </li>
              <li>
                <Link className="tech-link mb-4">
                  <h2>CSS3</h2>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 technologies" data-aos="fade-right">
            <ul className="list-unstyled">
              <li>
                <Link className="tech-link mb-4">
                  <h2>SEO</h2>
                </Link>
                <Link className="tech-link mb-4">
                  <h2>SMO</h2>
                </Link>
                <Link className="tech-link mb-4">
                  <h2>SMM</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* card1 */}
      </div>
      <div
        className="title section150 ms-5 mt-5 d-flex justify-content-center"
        data-aos="fade-up"
      >
        <h1 className=" " style={{ color: "brown", fontWeight: "bold" }}>
          HOW WE DO IT ?
        </h1>
      </div>
      <h3
        className="title section150 ms-5 mt-5 d-flex justify-content-center"
        data-aos="fade-up"
        style={{ fontWeight: "bold" }}
      >
        Going the extra mile with an extra bit of effort at every step.
      </h3>

      <div
        className="cards-container d-flex flex-wrap gap-5 justify-content-start align-items-start"
        style={{ paddingTop: "120px" }}
      >
        {data.map((e) => {
          return (
            <div
              className="card-wrapper"
              style={{ width: "48%" }} // Adjusting width to 48% for two columns with some gap
              data-aos="fade-up"
              key={e.title}
            >
              <div className="card-body ms-5">
                <img width={"30%"} src={e.image} alt="" />
                <h2 className="card-title">{e.title}</h2>
                <h5 className="card-text mt-3 " style={{ lineHeight: "1.5" }}>
                  {e.description}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
      <section className="ToolsWeUse " data-aos="fade-up">
        <h1 className="text-center my-5 fw-bold" style={{ color: "brown" }}>
          Tools We Use
        </h1>
        <div className="container">
          <div className="row justify-content-center align-content-center align-items-center">
            <div className="col-3  p-5 mx-4  my-2  border ">
              <img
                width={"90%"}
                src="https://th.bing.com/th/id/R.0f70d47cc6eb26955411fc30106dad9a?rik=5c5eiYoGeEkwRg&riu=http%3a%2f%2flogicbig.com%2ftutorials%2fmisc%2fgit%2fimages%2fgit.png&ehk=jMks4Z8b%2fax34N%2fpaiUcftkG3a5C8q%2bs8Eu%2b6vXVEi0%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                width={"80%"}
                src="https://static.vecteezy.com/system/resources/previews/016/716/481/original/facebook-icon-free-png.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                width={"80%"}
                src="https://th.bing.com/th/id/R.b757f2bca8039d4a08882d38f4c1b8f0?rik=RkV3z9I2nKqN9g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-twitter-logo-twitter-in-png-2500.png&ehk=waG%2bvemWkWhR2fldFDSNqLVXSXsqYneIiDse7tPV%2fXg%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                width={"80%"}
                src="https://th.bing.com/th/id/OIP.xa0FgRBsvMi7bmVNCDYsCgHaHa?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4 my-2 border ">
              <img
                width={"80%"}
                src="https://logodownload.org/wp-content/uploads/2018/03/google-adsense-logo-0.png"
                alt=""
              />
            </div>

            <div className="col-3 p-5 mx-4  my-2  border">
              <img
                width={"80%"}
                src="https://th.bing.com/th/id/R.a330e248626552a23af35e5c46526234?rik=DZhkgnpER0YViQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2flinkedIn%2flinkedIn_PNG8.png&ehk=4bFzIDABrAypqOis7809R99fdbUW93GC4XfvnNxZfdA%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="travelxp-container section150 ms-5 " data-aos="fade-up">
          {/* Title Section */}
          <h1 className="heading" style={{ color: "brown" }}>
            Marketing
          </h1>

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
            <ul className="platform ">
              <li>UI-UX</li>
              <li>Web</li>
              <li>Mobile </li>
              <li>Branding</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="morecards ms-5 my-5 section150 ">
          <div className="title">
            <h1 className="heading text-center" style={{ color: "brown" }}>
              Other services
            </h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-5">
              <div>
                <Link class="card" to="/service">
                  <div class="card-body tech">
                    <h1> Design.</h1>
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
                <Link class="card" to="service/technology">
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

export default Technology;
