import React from "react";
import {
  Container,
  Image,
  H5,
  H3,
  colors,
  Button,
  ReverseButton,
} from "../Utilities";
import styled from "styled-components";
import Socials from "./Socials";
import mainIllust from "../assets/Main_Illustration.svg";
import { Section } from "./../Utilities";

const MainIllustration = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 55%;
  height: auto;
  @media (max-width: 1024px) {
    width: 65%;
  }
  @media (max-width: 600px) {
    position: relative;
    width: 98%;
    align-self: center;
  }
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 45%;
  top: 28vh;
  left: 45vw;
  margin: 3rem;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    position: relative;
    top: auto;
    left: auto;
    width: 80%;
  }
`;

const CTA = styled.div`
  display: flex;
  align-items: start;
  margin: 1rem 0;
  gap: 0.8rem;
`;

const Header = () => {
  return (
    <Section id="top" style={{ margin: "0" }}>
      <header>
        <Container>
          <MainIllustration>
            <Image src={mainIllust} />
          </MainIllustration>
          <MainText>
            <CTA>
              <Button>Download CV</Button>
              <ReverseButton>Let's talk</ReverseButton>
            </CTA>
            <H5>Hello world! I'm</H5>
            <H3 style={{ color: colors.lilac200 }}>Nisha Chauhan</H3>
            <p style={{ color: colors.beige200 }}>
              A design oriented frontend developer and, passionate about creating
              modern visual solutions with an eye for details, craves aesthetics,
              obsessed with the idea of creating her own personal library.
            </p>
            <Socials />
          </MainText>
        </Container>
      </header>
    </Section>
  );
};

export default Header;
