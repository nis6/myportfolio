import React from "react";
import { Section } from "../Utilities";
import { H1, H2, H3, Image } from "./../Utilities";
import me from "../assets/me2bgless.png";
import lotuslogo from "../assets/lotuslogo.svg";
import { colors } from "../Utilities";
import Skillset from "./Skillset";
import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 600px) {
    height: max-content;
  }
`;

const FirstContainer = styled.div`
  display: flex;
  gap: 4rem;
  height: 35vh;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
    height: max-content;
  }
`;

const SecondContainer = styled.div`
  display: flex;
  height: 55vh;
  align-items: end;
  justify-content: space-between;
  padding-bottom: 0;
  border-bottom: ${colors.jumbo} solid 1px;
  gap: 4rem;
  @media (max-width: 1024px) {
    height: max-content;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    height: max-content;
  }
`;
const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  flex-basis: 15%;
  width: 300px;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  background: ${colors.jumbo};
  border-radius: 12rem 12rem 0 0;
  bottom: 0;
  @media (max-width: 1024px) {
    flex-basis: 30%;
  }
  @media (max-width: 600px) {
    margin-top: 2rem;
    justify-content: center;
    align-items: start;
    bottom: auto;
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

const NishaChauhan = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
  padding: 2rem 4rem 2rem 1rem;
  margin: 0.3rem;
  @media (max-width: 600px) {
    padding: 2rem 2rem 1rem 2rem;
  }
`;

const MyImage = styled.img`
  width: 120%;
  z-index: 5;
  @media (max-width: 600px) {
    width: 70%;
  }
`;

const H31 = styled(H3)`
  @media (max-width: 600px) {
    font-size: 2rem;
    text-align: center;
    border-top: solid 1px ${colors.jumbo};
  }
`;

const H11 = styled(H1)`
  @media (min-width: 1500px) {
    font-size: 10rem;
  }
`;

const H21 = styled(H2)`
  @media (min-width: 1500px) {
    font-size: 8rem;
    margin-bottom: 1.5rem;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <AboutContainer>
        <FirstContainer>
          <div style={{ zIndex: "6", padding: "1rem", opacity: "0.9" }}>
            <H21>CREATIVE</H21>
            <H11>DEVELOPER</H11>
          </div>
          <Skillset />
        </FirstContainer>
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
              I'm a frontend developer working with the latest web technologies,
              passionate about creating modern visual solutions through code while
              still being obsessed with the idea of creating my own personal library.
              Being creative, artistic, and having an eye for detail, all at the same
              time are my usual attributes which have helped me discover my zeal for
              developing technologies and taking design alongside to bring ideas to
              life. I am always looking for opportunities to upskill myself on areas
              that mix web technologies with other contemporary fields. Lastly, I'll
              call myself an aesthetic engineer, Engineer who craves aesthetics and
              collects books.
            </p>
          </NishaChauhan>
        </SecondContainer>
      </AboutContainer>
    </Section>
  );
};

export default About;
