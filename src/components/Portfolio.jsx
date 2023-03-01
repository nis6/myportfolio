import React from "react";
import { colors, Section } from "../Utilities";
import { H2 } from "../Utilities";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { Container } from "./../Utilities";

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  background-color: ${colors.beige100};
  gap: 2rem;
  width: 100vw;
  padding: 0 2rem;
`;

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container
        style={{
          gap: "2rem",
          background: colors.beige100,
          width: "100%",
          height: "max-content",
          padding: "0rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <H2 style={{ color: colors.beige200, opacity: "0.8" }}>PROJECTS</H2>
          <H2 style={{ color: colors.olive, transform: "translateX(-98%)" }}>
            PROJECTS
          </H2>
        </div>

        <ProjectContainer>
          <ProjectCard
            name="This Portfolio"
            techstack={[
              "JavascriptES6",
              "React",
              "Netlify",
              "Styled Components",
              "EmailJS",
              "Webpack",
              "React-icons",
            ]}
            desc="This website was designed in Figma including the customized SVGs, the theme, and the color palette created with the intention to give an intuition about the person that I am beyond my technical Skills."
            images={"PA"}
            github="https://github.com/nis6/myportfolio"
            live="https://nisha-chauhan.netlify.app/"
          />
          <ProjectCard
            name="Reader's Attic"
            techstack={[
              "React",
              "React-router",
              "Parcel",
              "React-icons",
              "Google Books API",
              "Styled Components",
              "Netlify",
              "Firebase",
            ]}
            desc="It’s an online library designed in Figma, built over Google Books API, to provide a fun interface to search and read out of a huge number of books and authors. Backend and related features are still under development."
            images={"RA"}
            github="https://github.com/nis6/Reader-s-Attic"
            live="https://readers-attic.netlify.app/"
          />
          <ProjectCard
            name="Legisitify"
            techstack={[
              "React",
              "Redux",
              "React-router",
              "Parcel",
              "React-icons",
              "chakra-UI",
              "Styled Components",
            ]}
            desc="This website works as a management platform for legal appointments at various lawfirms. Here lawfirms can register their lawyers and individuals can find lawyers best fitting their needs by comparing all the law firms present on this platform, thus having easy access to compare all in one place."
            images={"LA"}
            github="https://github.com/nis6/legistify"
            live="https://nisha-s-notes.netlify.app/"
          />
          <ProjectCard
            name="Degrees-of-Seperation"
            techstack={["NPM", "ReactJS", "Chakra-UI", "Styled-Components"]}
            desc="This application implements the concept of Six Degrees of Separation (that all people are six or fewer connections away) to tell about the relationships between two given user profiles, i.e. how many connections it takes to go from User-1 to User-2."
            images={"DA"}
            github="https://github.com/nis6/six-degrees"
            live="/"
          />
          <ProjectCard
            name="NotesApp"
            techstack={[
              "JavascriptES6",
              "Flexbox",
              "grid",
              "HTML",
              "CSS",
              "LocalStorage API",
            ]}
            desc="A note-taking frontend web application, built with vanilla Javascript making use of local storage API to store all the data. It allows you to store more than just text such as images, checkboxes, bullet points etc."
            images={"NA"}
            github="https://github.com/nis6/notesApp"
            live="https://nisha-s-notes.netlify.app/"
          />
          <ProjectCard
            name="Magazine"
            techstack={["JavascriptES6", "Flexbox", "grid", "HTML", "CSS"]}
            desc="Built this one-page static web page to apply my knowledge of advanced Flexbox and grid and mimic Pinterest’s layout, other than that it was just to create something fun and aesthetic with my snaps. "
            images={"MA"}
            github="https://github.com/nis6/Flexbox-grid-layout"
            live="https://nis6.github.io/Flexbox-grid-layout/"
          />
          <ProjectCard
            name="Tribute Page"
            techstack={[
              "JavascriptES6",
              "Flexbox",
              "grid",
              "HTML",
              "CSS",
              "LocalStorage API",
            ]}
            desc="Started my development journey with this simple tribute page, built with HTML, CSS and some obsession with Michelangelo di Lodovico Buonarroti Simoni.
“Genius is Eternal Patience.”"
            images={"TA"}
            github="https://github.com/nis6/Tribute-Page"
            live="https://nis6.github.io/Tribute-Page/"
          />
          <ProjectCard
            name="Spotify Clone"
            techstack={[
              "JavascriptES6",
              "Flexbox",
              "grid",
              "HTML",
              "CSS",
              "LocalStorage API",
            ]}
            desc="Coming Soon... "
            images={"SA"}
          />
        </ProjectContainer>
      </Container>
    </Section>
  );
};

export default Portfolio;
