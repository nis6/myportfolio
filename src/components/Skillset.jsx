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
  padding: 1rem 0.8rem 0 1.5rem;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Skill = styled.div`
  width: max-content;
  padding: 0.75rem 1.2rem;
  border-radius: 0.7rem;
  background-color: ${colors.bgbrown};
`;

const Skillset = () => {
  return (
    <SkillsetContainer>
      <H4 style={{ color: colors.bgbrown, fontWeight: "semibold" }}>Skillset</H4>
      <SkillContainer>
        <Skill>ReactJS</Skill>
        <Skill>JavaScript</Skill>
        <Skill>CSS</Skill>
        <Skill>HTML</Skill>
        <Skill>Python</Skill>
        <Skill>AWS</Skill>
        <Skill>Docker</Skill>
        <Skill>Git</Skill>
        <Skill>GitHub</Skill>
        <Skill>Figma</Skill>
      </SkillContainer>
    </SkillsetContainer>
  );
};

export default Skillset;
