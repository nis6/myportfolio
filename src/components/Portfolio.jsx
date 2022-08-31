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
            name="Magazine"
            techstack={[
              "JavascriptES6",
              "React",
              "Redux",
              "Firebase",
              "Styled Components",
            ]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            images={"RA"}
          />
          <ProjectCard
            name="Magazine"
            techstack={[
              "JavascriptES6",
              "React",
              "Redux",
              "Firebase",
              "Styled Components",
            ]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            images={"RA"}
          />
          <ProjectCard
            name="Magazine"
            techstack={[
              "JavascriptES6",
              "React",
              "Redux",
              "Firebase",
              "Styled Components",
            ]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "
            images={"RA"}
          />
        </ProjectContainer>
      </Container>
    </Section>
  );
};

export default Portfolio;
