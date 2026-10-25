import React from "react";
import styled from "styled-components";
import type { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{
  $backgroundColor: string;
  $disabled: boolean;
}>`
  display: inline-block;
  background-color: ${(props) =>
    props.$disabled ? "grey" : props.$backgroundColor};
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 16px;
  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "pointer"};
  transition: 0.3s;

  &:hover {
    opacity: ${(props) => (props.$disabled ? 0.6 : 0.8)};
  }

  @media (max-width: 600px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Label: React.FC<LabelProps> = ({
  text,
  backgroundColor = "blue",
  disabled = false,
  onClick,
}) => {
  return (
    <StyledLabel
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {text}
    </StyledLabel>
  );
};

export default Label;