import React from "react";
import { Container, Section } from "../Utilities";
import { H5, H3, Image } from "./../Utilities";
import me from "../assets/me2bgless.png";
import { colors } from "../Utilities";
import Skillset from "./Skillset";

const About = () => {
  return (
    <Section id="about">
      <Container style={{ alignItems: "center" }}>
        <H5>Get to Know</H5>
        <H3>About Me</H3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              width: "25vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={me}
              alt="ME"
              style={{ width: "80%" }} //borderRadius: "80rem 80rem 0 80rem"
            />
          </div>
          <div style={{ width: "70vw" }}>
            <div>
              <p style={{ color: colors.lilac200 }}>
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
            <div>
              <Skillset />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
