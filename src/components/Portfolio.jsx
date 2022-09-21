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
  align-items: center;
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
              "Redux",
              "Firebase",
              "Styled Components",
            ]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            images={"PA"}
            github="https://github.com/nis6/myportfolio"
            live="https://portfolio-nisha.netlify.app/"
          />
          <ProjectCard
            name="Reader's Attic"
            techstack={[
              "JavascriptES6",
              "React",
              "Redux",
              "Firebase",
              "Styled Components",
            ]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            images={"RA"}
            github="https://github.com/nis6/Reader-s-Attic"
            live="https://readers-attic.netlify.app/"
          />
          <ProjectCard
            name="Six-Degrees of Seperation"
            techstack={[
              "JavascriptES6",
              "ReactJS",
              "Chakra-UI",
              "Styled-Components",
              "NPM",
            ]}
            desc="labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            images={"NA"}
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
            desc="labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            images={"NA"}
          />
          <ProjectCard
            name="Magazine"
            techstack={["JavascriptES6", "Flexbox", "grid", "HTML", "CSS"]}
            desc="labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            images={"MA"}
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
            desc="labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            images={"NA"}
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
