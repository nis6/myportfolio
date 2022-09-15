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
    top: 0;
    width: 100%;
  }
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 40%;
  top: 23vh;
  left: 52vw;
  margin: 3rem;

  @media (max-width: 1024px) {
    left: 60vw;
    width: 32%;
  }
  @media (max-width: 600px) {
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

const HeaderContainer = styled(Container)`
  width: 100%;
  margin-bottom: 10rem;
  margin-top: 0;
  top: 0;
`;

const Header = () => {
  const downloadResume = () => {
    // to fetch files from inside public folder, pass file name only and not the absolute path
    //React.js Server Convert Public Folder File Access With URL to HTTP Response.
    fetch("Resume-Nisha_Chauhan.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.download = "Nisha-Chauhan-Resume.pdf";
        alink.href = fileURL;
        alink.click();
      });
    });
  };

  return (
    <Section id="top" style={{ height: "max-content" }}>
      <header>
        <HeaderContainer>
          <MainIllustration>
            <Image src={mainIllust} />
          </MainIllustration>
          <MainText>
            <CTA>
              <Button onClick={downloadResume}>Download CV</Button>
              <a href="#contact">
                <ReverseButton>Let's talk</ReverseButton>
              </a>
            </CTA>
            <H5>Hello world! I'm</H5>
            <H3 style={{ color: colors.lilac200 }}>Nisha Chauhan</H3>
            <p
              style={{
                color: colors.beige200,
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              Creative frontend developer with a strong sense of design, passionate
              about creating modern visual solutions through code while also,
              collecting books to build her own personal library.
            </p>
            <Socials />
          </MainText>
        </HeaderContainer>
      </header>
    </Section>
  );
};

export default Header;
