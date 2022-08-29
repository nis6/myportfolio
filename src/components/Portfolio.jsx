import React from "react";
import { colors, Section } from "../Utilities";
import { H2, H1, Container } from "../Utilities";
import styled from "styled-components";

const ProjectContainer = styled.div`
  background-color: ${colors.beige100};
  height: 100vh;
  width: 100vw;
`;

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <ProjectContainer>
        <div style={{ zIndex: "6" }}>
          <H2>PROJECTS</H2>
          <H1>DEVELOPER</H1>
        </div>
      </ProjectContainer>
    </Section>
  );
};

export default Portfolio;
