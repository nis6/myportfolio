import styled, { createGlobalStyle } from "styled-components";

export const PrimaryFont = "Poppins, sans-serif";


export const colors = {
    armadillo: "#48473F",
    hampton: "#E3D2AE",
    bgbrown: "#A5715E",
    nightblack: "#232421",
    olive: "#8D8572",
    beige100: "#CDC2B3",
    beige200: "#BEAF9A",
    jumbo: "#737374",
    spicy: "#8B6045",
    muddy: "#B88565",
    lilac300: "#8F757C",
    lilac100: "#BB9EA9",
    lilac200: "#A28D8E",
    brown: "#6C5044"
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
        @media screen and (min-width: 1500px) {
          font-size: 18px;
        }
        height: 100%;
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
    display: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: all 5000s  ease-in-out;
    transition-property: background-color, color, border-color;
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
        display: flex;
        flex-direction: column;
        //?????I don't get how assigning align-items property effects the whole layout
        overflow-x: hidden;
        margin:0;
        padding: 0;
        background: ${colors.nightblack};
        color: ${colors.hampton};
        font-family: 'Poppins', sans-serif;
        background-image: url(..src/assets/bg-pattern.png);
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
position: relative;
margin-bottom: 8rem;
height: max-content;
padding-bottom: 2rem;
@media (max-width: 1024px) {
    margin-bottom: 6rem;
}
@media (max-width: 600px) {
 margin-bottom: 4rem;
}
`;


export const A = styled.a`
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

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding-top: 1rem;
@media (max-width: 1024px) {
    padding-top: 0.8rem;
}
@media (max-width: 600px) {
    padding-top: 0.5rem;
}
`;

export const ALink = styled.a`
color:${colors.armadillo};
transition:all 400ms ease;
`;

export const Button = styled.button`
width: max-content;
padding: 0.75rem 1.2rem;
border-radius: 0.5rem;
cursor: pointer;
border: solid 1px ${colors.hampton};
color: ${colors.hampton};
background: transparent;
&:hover{
    background-color: ${colors.olive};
    border: solid 1px ${colors.olive};
    color: ${colors.nightblack};
}
&:active{
    border: none;
}
`;

export const ReverseButton = styled.button`
width: max-content;
padding: 0.75rem 1.2rem;
border-radius: 0.5rem;
cursor: pointer;
background-color: ${colors.olive};
border: solid 1px ${colors.olive};
color: ${colors.nightblack};

&:hover{
    border: solid 1px ${colors.hampton};
    color: ${colors.hampton};
    background: transparent;
}
&:active{
    padding: 0.7rem 1rem;
}
`;

export const Image = styled.img`
display: block;
width: 100%;
object-fit: cover;
`;


export const H5 = styled.h5`
    color: ${colors.muddy};
    font-size: 16px;
    font-family: 'Courier Prime', monospace;
    font-weight: 100;
`;

export const H1 = styled.h1`
   font-size: 5rem;
   color: ${colors.spicy};
   line-height: 5.5rem;
 font-weight: 200;
`;
export const H2 = styled.h2`
   font-size: 4rem;
   color: ${colors.muddy};
   line-height: 4.5rem;
 font-weight: 200;
`;
export const H3 = styled.h3`
    color: ${colors.hampton};
    font-size: 32px;
    font-family: ${PrimaryFont};
    font-weight: 500;
`;

export const H4 = styled.h4`
    color: ${colors.bgbrown};
    font-size: 24px;
    font-family: ${PrimaryFont};
    font-weight: 400;
   
`;

export const ColumnBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.6rem;
`
export const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.6rem;
`

export default GlobalStyle;

