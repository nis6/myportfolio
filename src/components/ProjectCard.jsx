import React from "react";
import styled from "styled-components";
import { colors, H4, H5, A } from "../Utilities";
import Carousel from "./Carousel";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { IconContext } from "react-icons";

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding-bottom: 0.7rem;
  background-color: ${colors.beige200};
  border-radius: 0 0rem 2rem 2rem;
  color: ${colors.nightblack};
  width: 27vw;
  height: 80vh;
  @media (max-width: 1024px) {
    width: 40vw;
    height: 75vh;
  }
  @media (max-width: 600px) {
    width: 75vw;
    height: max-content;
  }
  @media (max-width: 400px) {
    width: 90vw;
  }
`;

const Techstack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  padding: 0 1rem;
`;

const H51 = styled.div`
  background-color: ${colors.olive};
  border-radius: 0.3rem;
  padding: 0.1rem 0.4rem;
`;

export default function ProjectCard({
  name,
  images,
  techstack,
  desc,
  github,
  live,
}) {
  return (
    <ProjectCardContainer>
      <Carousel images={images} />
      <H4
        style={{
          color: colors.nightblack,
          padding: "0rem 1rem",
          marginTop: "-1rem",
        }}
      >
        {name}
      </H4>
      <Techstack>
        {techstack.map((item, index) => (
          <H51 key={index}>{item}</H51>
        ))}
      </Techstack>
      <p
        style={{
          color: colors.armadillo,
          textAlign: "justify",
          marginTop: "0.5rem",
          padding: "0 1rem",
        }}
      >
        {desc}
      </p>

      <IconContext.Provider value={{ color: colors.nightblack, size: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            gap: "0.5rem",
            padding: "0rem 0.8rem",
          }}
        >
          <A
            href="https://github.com/nis6/Reader-s-Attic"
            style={{ padding: "0.2rem" }}
          >
            <FaGithub />
          </A>
          <A href="https://readers-attic.netlify.app/" style={{ padding: "0.2rem" }}>
            <BiLinkExternal />
          </A>
        </div>
      </IconContext.Provider>
    </ProjectCardContainer>
  );
}
