import React from "react";
import styled from "styled-components";
import { colors, H4 } from "../Utilities";

const SkillsetContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: solid 1px ${colors.beige200};
  margin-left: 1rem;
  justify-content: end;
  margin-top: 1rem;
  padding: 1rem 3rem 0 1.5rem;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`;

const Skill = styled.div`
  width: max-content;
  padding: 0.75rem 1.2rem;
  border-radius: 0.7rem;
  background-color: ${colors.bgbrown};
  @media (max-width: 1024px) {
    padding: 0.5rem 0.8rem;
  }
`;

const skills = [
  "ReactJS",
  "Webpack",
  "Babel",
  "Parcel",
  "NPM",
  "Netlify",
  "JavaScript",
  "CSS",
  "HTML",
  "Python",
  "AWS",
  "Docker",
  "Git",
  "GitHub",
  "Figma",
];

const Skillset = () => {
  return (
    <SkillsetContainer>
      <H4 style={{ color: colors.bgbrown, fontWeight: "semibold" }}>Skillset</H4>
      <SkillContainer>
        {skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillContainer>
    </SkillsetContainer>
  );
};

export default Skillset;
