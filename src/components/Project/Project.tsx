import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
  <h2>My Projects</h2>
  <div className="projects">

    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <title>Folder</title>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <div className="project-links">
            <a href="https://github.com/abhaydixit07/Edusync-Frontend" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </header>
        <div className="body">
          <h3>EduSync: Personalized Learning for Neurodiverse Students</h3>
          <p>
            2nd Runner-up at MasterCard AI Garage x Code Cubicles 3.0. A personalized LMS using AI, speech recognition, and 3D modeling to support neurodiverse learners with A-Z learning, visual/audio aids, and a GenAI chatbot.
          </p>
        </div>
        <footer>
          <ul className="tech-list">
            <li>React.js</li>
            <li>Node.js</li>
            <li>3D Modeling</li>
            <li>AI</li>
          </ul>
        </footer>
      </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <title>Folder</title>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <div className="project-links">
            <a href="https://github.com/orgs/ResQAI/repositories" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </header>
        <div className="body">
          <h3>ResQAI: Disaster Management Platform</h3>
          <p>
            AI-powered platform for real-time disaster severity prediction, resource allocation, and volunteer mobilization. Used by NGOs and government bodies for flood, quake, and cyclone response coordination.
          </p>
        </div>
        <footer>
          <ul className="tech-list">
            <li>Next.js</li>
            <li>Node.js</li>
            <li>AI/ML</li>
            <li>AWS</li>
          </ul>
        </footer>
      </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <title>Folder</title>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <div className="project-links">
            <a href="https://github.com/abhaydixit07/ayurguru-frontend" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </header>
        <div className="body">
          <h3>Ayurguru: Intelligent Health Chatbot</h3>
          <p>
            Developed using Google’s Gemma via GroqCloud, this chatbot delivers real-time personalized health suggestions, parsing medical queries and PDFs using Gemini Pro, React, and Express.
          </p>
        </div>
        <footer>
          <ul className="tech-list">
            <li>React</li>
            <li>Node.js</li>
            <li>Gemma</li>
            <li>PostgreSQL</li>
            <li>Python</li>
          </ul>
        </footer>
      </div>
    </ScrollAnimation>
  </div>

  <Container id="achievements">
  <h2>My Achievements</h2>
  <div className="projects">

    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
          </svg>
        </header>
        <div className="body">
          <h3>2nd Runner-up @ MasterCard AI Garage 3.0</h3>
          <p>
            Recognized for building EduSync – an AI-powered LMS enhancing accessibility for neurodiverse students through real-time conversation and adaptive learning.
          </p>
        </div>
      </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
          </svg>
        </header>
        <div className="body">
          <h3>Selected for SIH 2023 (Final Round)</h3>
          <p>
            Reached the grand finale of Smart India Hackathon 2023 under software track for building a multilingual AI solution for national-level problem statements.
          </p>
        </div>
      </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
          </svg>
        </header>
        <div className="body">
          <h3>Top Performer @ Groq AI Hackathon</h3>
          <p>
            Built Ayurguru, a GroqCloud-powered intelligent chatbot using Gemma + Gemini Pro that delivered lightning-fast health insights with real-time document parsing.
          </p>
        </div>
      </div>
    </ScrollAnimation>

  </div>
</Container>

</Container>


  );
}