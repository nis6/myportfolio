import React from "react";
import { Section } from "../Utilities";
import { H3, H5, Container } from "../Utilities";
import styled from "styled-components";

const ProjectContainer = styled.div``;

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container style={{ alignItems: "center" }}>
        <H5>check out my</H5>
        <H3>Projects</H3>
      </Container>
    </Section>
  );
};

export default Portfolio;
