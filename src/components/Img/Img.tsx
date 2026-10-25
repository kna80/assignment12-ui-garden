import React from "react";
import styled from "styled-components";
import type { ImgProps } from "./Img.types";

const ImageWrapper = styled.div<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  display: inline-block;
  padding: 10px;
  border-radius: 8px;

  background-color: ${(props) =>
    props.$disabled ? "grey" : props.$backgroundColor};

  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "default"};

  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const StyledImage = styled.img<{
  $width: string;
  $height: string;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  max-width: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width = "250px",
  height = "180px",
  backgroundColor = "lightblue",
  disabled = false,
}) => {
  return (
    <ImageWrapper
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="image-wrapper"
    >
      <StyledImage
        src={src}
        alt={alt}
        $width={width}
        $height={height}
      />
    </ImageWrapper>
  );
};

export default Img;