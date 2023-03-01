import React from "react";
import styled from "styled-components";
import { colors, H4, A, ColumnBox, RowBox } from "../Utilities";
import Carousel from "./Carousel";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { IconContext } from "react-icons";

const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin: 1rem 0.5rem;
  position: relative;
  padding-bottom: 0.7rem;
  background-color: ${colors.beige200};
  border-radius: 0 0rem 2rem 2rem;
  color: ${colors.nightblack};
  width: 100%;
  height: max-content;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 400px) {
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
  color: ${colors.nightblack};
  padding: 0.1rem 0.4rem;
`;

const DetaislBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 2rem;
  @media (max-width: 800px) {
    width: 100%;
    padding: 1.5rem;
  }
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
      <DetaislBox>
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
              padding: "0.8rem",
            }}
          >
            <A href={github} style={{ padding: "0.2rem" }}>
              <FaGithub />
            </A>
            <A href={live} style={{ padding: "0.2rem" }}>
              <BiLinkExternal />
            </A>
          </div>
        </IconContext.Provider>
      </DetaislBox>
    </ProjectCardContainer>
  );
}
