import React from "react";
import { Section } from "../Utilities";
import { H1, H2, H3, Image } from "./../Utilities";
import me from "../assets/me2bgless.png";
import lotuslogo from "../assets/lotuslogo.svg";
import { colors } from "../Utilities";
import Skillset from "./Skillset";
import styled from "styled-components";

const PhotoContainer = styled.div`
  width: 27vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  background: ${colors.jumbo};
  border-radius: 12rem 12rem 0 0;
  position: absolute;
  bottom: 0;
  left: -4.5rem;
`;

const LotusContainer = styled.div`
  width: 110%;
  position: absolute;
  left: 50%;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 4rem;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem 2rem 0 0;
`;

const About = () => {
  return (
    <Section id="about" style={{}}>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <TextContainer>
          <div style={{ zIndex: "6" }}>
            <H2>CREATIVE</H2>
            <H1>DEVELOPER</H1>
          </div>
          <SecondContainer>
            <Skillset />
            <div style={{ display: "flex", flexDirection: "column", left: "10%" }}>
              <H3 style={{ color: colors.lilac300, fontWeight: "100" }}>
                NISHA CHAUHAN
              </H3>
              <p style={{ color: colors.beige100 }}>
                A design oriented frontend developer and, passionate about creating
                modern visual solutions with an eye for details, craves aesthetics,
                obsessed with the idea of creating her own personal library.A design
                oriented frontend developer and, passionate about creating modern
                visual solutions with an eye for details, craves aesthetics, obsessed
                with the idea of creating her own personal library.A design oriented
                frontend developer and, passionate about creating modern visual
                solutions with an eye for details, craves aesthetics, obsessed with
                the idea of creating her own personal library.
              </p>
            </div>
          </SecondContainer>
        </TextContainer>
        <PhotoContainer>
          <LotusContainer>
            <Image
              src={lotuslogo}
              alt="LOGO"
              style={{ width: "100%" }} //borderRadius: "80rem 80rem 0 80rem"
            />
          </LotusContainer>
          <Image
            src={me}
            alt="ME"
            style={{ width: "80%", zIndex: "5" }} //borderRadius: "80rem 80rem 0 80rem"
          />
        </PhotoContainer>
      </div>
    </Section>
  );
};

export default About;
