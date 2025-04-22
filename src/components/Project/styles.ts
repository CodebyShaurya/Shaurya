import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  width: 100%; /* Ensure the container does not overflow */

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    width: 100%; /* Ensure the grid container does not overflow */
    box-sizing: border-box; /* Include padding in width calculations */

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      overflow: hidden; /* Prevent content from overflowing */

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      img {
        width: 100%;
        height: auto; /* Ensure images scale properly */
        max-width: 100%; /* Prevent images from overflowing */
        object-fit: cover; /* Ensure the image fits within its container */
        border-radius: 0.8rem; /* Add some rounding for better visuals */
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5.0rem;
        }
      }

      h3 {
        margin-bottom: 2rem;
        font-size: 2rem; /* Adjust font size for better responsiveness */
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        font-size: 1.6rem; /* Adjust font size for better responsiveness */

        a {
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem; /* Adjust gap for smaller screens */
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
      gap: 1rem; /* Further reduce gap for smaller screens */

    .project {
      padding: 1.5rem 1rem; /* Adjust padding for smaller screens */
    }
  }

  @media (max-width: 480px) {
    .projects {
      gap: 0.8rem; /* Minimize gap for very small screens */
    }

    .project {
      padding: 1rem 0.8rem; /* Further adjust padding for very small screens */
    }
  }

  @media (max-width: 400px) {
    .projects {
      grid-template-columns: 1fr; /* Ensure only one column for very small screens */
      gap: 0.5rem; /* Minimize gap for very small screens */
    }

    .project {
      padding: 0.5rem; /* Reduce padding for very small screens */
      width: 100%; /* Ensure the project container fits within the screen */
      box-sizing: border-box; /* Include padding in width calculations */
    }

    img {
      max-width: 100%; /* Ensure images shrink properly */
      height: auto; /* Maintain aspect ratio */
      object-fit: cover; /* Ensure the image fits within its container */
    }

    h3 {
      font-size: 1.6rem; /* Adjust heading size for very small screens */
    }

    p {
      font-size: 1.4rem; /* Adjust paragraph size for very small screens */
    }

    footer .tech-list {
      font-size: 1.2rem; /* Adjust tech list size for very small screens */
    }
  }
`;