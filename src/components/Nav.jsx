import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { ImMail } from "react-icons/im";
import { FaUser, FaPenSquare } from "react-icons/fa";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { colors } from "../Utilities";
import { useState } from "react";

const Navbar = styled.nav`
  background: rgb(72, 71, 63, 0.3);
  width: max-content;
  padding: 0.7rem 1.7rem;
  position: fixed;
  z-index: 2;
  bottom: 1.5rem;
  display: flex;
  gap: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

const A = styled.a`
  background: transparent;
  padding: 0.6rem;
  border-radius: 65%;
  display: flex; //display:flex; to an a tag????? that too helps creating better spacing inside the parent container and better shape of hover circle
  &:hover {
    background: rgb(72, 71, 63, 0.4);
  }
  &:active {
    background: rgb(72, 71, 63, 0.5);
  }
`;

export const Nav = () => {
  const [active, setActive] = useState("#top");

  return (
    <Navbar>
      <IconContext.Provider value={{ color: colors.lilac300, size: "1.5rem" }}>
        <A
          href="#top"
          onClick={() => setActive("#top")}
          style={{ background: active === "#top" ? "rgb(72, 71, 63, 0.5)" : "" }}
        >
          <AiFillHome />
        </A>
        <A
          href="#about"
          onClick={() => setActive("#about")}
          style={{ background: active === "#about" ? "rgb(72, 71, 63, 0.5)" : "" }}
        >
          <FaUser />
        </A>
        <A
          href="#portfolio"
          onClick={() => setActive("#portfolio")}
          style={{
            background: active === "#portfolio" ? "rgb(72, 71, 63, 0.5)" : "",
          }}
        >
          <BsFillFileEarmarkCodeFill />
        </A>
        <A
          href="#blog"
          onClick={() => setActive("#blog")}
          style={{ background: active === "#blog" ? "rgb(72, 71, 63, 0.5)" : "" }}
        >
          <FaPenSquare />
        </A>
        <A
          href="#contact"
          onClick={() => setActive("#contact")}
          style={{ background: active === "#contact" ? "rgb(72, 71, 63, 0.5)" : "" }}
        >
          <ImMail />
        </A>
      </IconContext.Provider>
    </Navbar>
  );
};
