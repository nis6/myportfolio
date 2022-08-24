import styled, { createGlobalStyle } from "styled-components";

export const PrimaryFont = "Poppins, sans-serif";


export const colors = {
    armadillo: "#48473F",
    hampton: "#E3D2AE",
    nightblack: "#232421",
    olive: "#8D8572",
    beige100: "#CDC2B3",
    beige200: "#BEAF9A",
    jumbo: "#737374",
    spicy: "#8B6045",
    muddy: "#B88565"
}

const GlobalStyle = createGlobalStyle`
    html{
        font-size:12px;
        box-sizing: border-box;
        margin:0;
        overflow-x: hidden;
        user-select: none; 
        @media screen and (min-width: 1000px) {
          font-size: 14px;
        }
        height: 100%;
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
    display: none;
}
    *, *:before, *:after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    svg {
    pointer-events: none;
}
    body{
        position: relative;
        overflow-x: hidden;
        margin:0;
        background: ${colors.nightblack};
        color: ${colors.hampton};
        font-family: 'Poppins', sans-serif;
        height: 100%;
    }
`;

export const Logo = styled.div`
  width: 7rem;
  height: 5rem;
  margin-bottom: 0;
  padding: 0;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Section = styled.section`
margin-top: 8rem;
`;
export const Container = styled.div`
width: 80%;
margin: 0 auto;
`;

export default GlobalStyle;

