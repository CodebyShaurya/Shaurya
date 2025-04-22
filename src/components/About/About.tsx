import { Container } from "./styles";
import VinayakSingh from "../../assets/Vinayak Singh.jpg";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
      <ScrollAnimation animateIn="fadeInLeft">
  <h2>About me</h2>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
  <p>
    Hi there! I'm Shaurya Gupta, a passionate Software Engineer with a strong foundation in web development, system design, and AI-powered solutions.
  </p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
  <p>
    I enjoy building robust full-stack applications, solving DSA problems, and contributing to impactful tech communities.
  </p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
  <p>
    From hackathons to leading community initiatives, I constantly seek opportunities to learn, innovate, and collaborate.
  </p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={400}>
  <div className="education">
    <h3>Education:</h3>
    <h4>Bachelor of Technology - Information Technology</h4>
    <p>University School of Information, Communication and Technology (USICT), Delhi | Nov 2022 - Aug 2026</p>
    <p>CGPA: 8.2</p>
    <h4>Rosary Senior Secondary School</h4>
    <p>Class XII: 94% | April 2021 - March 2022</p>
    <p>Class X: 92.2% | April 2019 - March 2020</p>
  </div>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInLeft" delay={550}>
  <div className="experience">
    <h3>Experience:</h3>
    <h4>Software Developer Intern</h4>
    <p>Novarius Global | Delhi, India</p>
    <p>
      Developed the UCC Complaint System used by Jio, Vi, and Airtel for handling unsolicited commercial communication complaints.
      Built using React.js, Node.js, Express, Tailwind CSS, and PostgreSQL for scalable, responsive performance.
    </p>
  </div>
</ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={VinayakSingh} alt="Shaurya Gupta" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
