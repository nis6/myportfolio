import React from "react";
import { Section } from "../Utilities";
import { H1, H2, H3, Image, ReverseButton } from "./../Utilities";
import me from "../assets/me2bgless.png";
import lotuslogo from "../assets/lotuslogo.svg";
import { colors } from "../Utilities";
import Skillset from "./Skillset";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 5rem;
  @media (max-width: 600px) {
    height: max-content;
  }
`;

const TextContainer = styled.div`
  display: flex;
  gap: 4rem;
  height: 40vh;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    height: max-content;
  }
`;
const PhotoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  background: ${colors.jumbo};
  border-radius: 12rem 12rem 0 0;
  position: relative;
  bottom: 0;
  left: -2.9rem;
  @media (max-width: 1024px) {
    width: 170%;
  }
  @media (max-width: 600px) {
    width: 30%;
    margin-top: 2rem;
    left: 50%;
    transform: translate(-50%);
    border-radius: 100rem;
  }
`;

const LotusContainer = styled.div`
  width: 110%;
  position: absolute;
  left: 50%;
  @media (max-width: 600px) {
    top: 0.5rem;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  height: 60vh;
  gap: 4rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    height: max-content;
  }
`;

const NishaChauhan = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 1rem 1rem;
  margin: 0.3rem;
  @media (max-width: 600px) {
    padding: 2rem 2rem 1rem 2rem;
  }
`;

const MyImage = styled.img`
  width: 80%;
  z-index: 5;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const H31 = styled(H3)`
  @media (max-width: 600px) {
    font-size: 2rem;
    text-align: center;
    border-top: solid 1px ${colors.jumbo};
  }
`;

const About = () => {
  return (
    <Section id="about">
      <AboutContainer>
        <TextContainer>
          <div style={{ zIndex: "6" }}>
            <H2>CREATIVE</H2>
            <H1>DEVELOPER</H1>
          </div>
          <Skillset />
        </TextContainer>
        <SecondContainer>
          <PhotoContainer>
            <LotusContainer>
              <Image
                src={lotuslogo}
                alt="LOGO"
                style={{ width: "100%" }} //borderRadius: "80rem 80rem 0 80rem"
              />
            </LotusContainer>
            <MyImage src={me} alt="ME" />
          </PhotoContainer>
          <NishaChauhan>
            <H31 style={{ color: colors.lilac300, fontWeight: "100" }}>
              NISHA CHAUHAN
            </H31>
            <p
              style={{
                color: colors.beige100,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              A design oriented frontend developer and, passionate about creating
              modern visual solutions with an eye for details, craves aesthetics,
              obsessed with the idea of creating her own personal library.A design
              oriented frontend developer and, passionate about creating modern
              visual solutions with an eye for details, craves aesthetics, obsessed
              with the idea of creating her own personal library.A design oriented
              frontend developer and, passionate about creating modern visual
              solutions with an eye for details, craves aesthetics, obsessed with the
              idea of creating her own personal library.
            </p>
          </NishaChauhan>
        </SecondContainer>
      </AboutContainer>
    </Section>
  );
};

export default About;
