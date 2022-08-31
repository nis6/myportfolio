import React from "react";
import linkedin from "../assets/linkedIn.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import styled from "styled-components";

const A = styled.a`
  &:hover {
    padding: 0 1.2rem 0 0;
    opacity: 0.8;
  }
`;

const Socials = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        margin: "0.6rem 0",
      }}
    >
      <A href="https://www.linkedin.com/in/nis6/">
        <img src={linkedin} alt="LinkedIn" />
      </A>
      <A href="https://twitter.com/Nishachauhanr">
        <img src={twitter} alt="twitter" />
      </A>
      <A href="https://github.com/nis6">
        <img src={github} alt="github" />
      </A>
    </div>
  );
};

export default Socials;
