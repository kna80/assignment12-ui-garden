import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{
  $backgroundColor: string;
}>`
  background-color: ${(props) => props.$backgroundColor};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    background-color: grey;
    color: #ffffff;
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = "blue",
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;