import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/GeeksforGeeks.svg.png'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/lc.webp'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
      <ScrollAnimation animateIn="fadeInUp">
  <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
  <h1>Shaurya Gupta</h1>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
  <h3>Software Engineer</h3>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
  <p className="small-resume" style={{ fontSize: "1.2rem", fontWeight: "500" }}>
    Full-stack developer crafting responsive apps and AI-powered solutions with a passion for innovation.
  </p>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
  <BrowserRouter>
    <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
  </BrowserRouter>
</ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https:/www.linkedin.com/in/shaurya--gupta"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/CodebyShaurya/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://leetcode.com/u/shauryagupta118/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/shauryag2a6g/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}