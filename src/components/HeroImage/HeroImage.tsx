import React from "react";
import styled from "styled-components";
import type { HeroImageProps } from "./HeroImage.types";

const HeroContainer = styled.section<{
  $backgroundColor: string;
  $textColor: string;
  $disabled: boolean;
}>`
  position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 350px;
  padding: 40px 20px;
  box-sizing: border-box;
  border-radius: 12px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.$disabled ? "grey" : props.$backgroundColor};

  color: ${(props) =>
    props.$disabled ? "white" : props.$textColor};

  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "default"};

  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    min-height: 250px;
    padding: 25px 15px;
  }
`;

const HeroBackground = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;

  h1 {
    font-size: 36px;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle = "",
  backgroundColor = "lightblue",
  textColor = "black",
  disabled = false,
}) => {
  return (
    <HeroContainer
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="hero-container"
    >
      <HeroBackground src={src} alt={alt} />

      <HeroContent>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroImage;