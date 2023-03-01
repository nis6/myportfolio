import React from "react";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import styled from "styled-components";
import assets from "../assets";
import { colors } from "../Utilities";
import { IconContext } from "react-icons";

const Slider = styled.div`
  display: flex;
  position: relative;
  top: -1.5rem;
  justify-content: center;
  align-items: center;
`;

const Slide = styled.img`
  width: 600px;
  height: 300px;
  object-fit: contain;
  box-shadow: 0.2rem 0.2rem 0.5rem;
  @media (max-width: 1000px) {
    width: 450px;
    height: 250px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 200px;
  }
`;

const SlideButton = styled.button`
  color: ${colors.armadillo};
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: space-ar;
  align-items: center;
  padding: 0.3rem;
  cursor: pointer;
  background: ${colors.beige200};
  border-radius: 3rem;
  &:hover {
    background: rgb(72, 71, 63, 0.3);
    border-radius: 4rem;
  }
  &:active {
    color: ${colors.nightblack};
  }
`;

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = assets[images].length;
  console.log("length", length);
  if (!Array.isArray(assets[images]) || assets[images].length <= 0) {
    return null;
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  return (
    <Slider>
      <IconContext.Provider value={{ size: "2rem" }}>
        <SlideButton onClick={prevSlide}>
          <BsFillPlayFill
            style={{
              transform: "rotate(180deg)",
              left: "0",
              position: "relative",
              zIndex: "10",
            }}
          />
        </SlideButton>
        {assets[images].map((item, index) => {
          return (
            <div
              style={{
                transform: index === current ? "translateY(-1%)" : "",
              }}
              key={index}
            >
              {index === current && <Slide src={item} />}
            </div>
          );
        })}
        <SlideButton onClick={nextSlide}>
          <BsFillPlayFill
            style={{
              position: "relative",
              zIndex: "10",
              right: "0",
            }}
          />
        </SlideButton>
      </IconContext.Provider>
    </Slider>
  );
};

export default Carousel;
