import React from "react";
import styled from "styled-components";
import { colors, H4 } from "../Utilities";

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
    <div>
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
    </div>
  );
};

export default Skillset;
