import React from "react";
import styled from "styled-components";
import type { TextProps } from "./Text.types";

const StyledText = styled.p<{
  $color: string;
  $backgroundColor: string;
  $fontSize: string;
  $disabled: boolean;
}>`
  display: block;
  background-color: ${(props) =>
    props.$disabled ? "grey" : props.$backgroundColor};
  color: ${(props) =>
    props.$disabled ? "white" : props.$color};
  font-size: ${(props) => props.$fontSize};
  padding: 12px 20px;
  border-radius: 6px;
  line-height: 1.5;
  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "default"};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  transition: 0.3s;

  @media (max-width: 600px) {
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
  }
`;

const Text: React.FC<TextProps> = ({
  text,
  color = "black",
  backgroundColor = "lightblue",
  fontSize = "16px",
  disabled = false,
}) => {
  return (
    <StyledText
      $color={color}
      $backgroundColor={backgroundColor}
      $fontSize={fontSize}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </StyledText>
  );
};

export default Text;