import React from "react";
import styled from "styled-components";
import type { RadioButtonProps } from "./RadioButton.types";

const RadioContainer = styled.label<{
  $backgroundColor: string;
  $textColor: string;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 6px;

  background-color: ${(props) =>
    props.$disabled ? "grey" : props.$backgroundColor};

  color: ${(props) =>
    props.$disabled ? "white" : props.$textColor};

  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "pointer"};

  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};

  input {
    cursor: inherit;
    accent-color: blue;
  }

  @media (max-width: 600px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  backgroundColor = "lightblue",
  textColor = "black",
  disabled = false,
  onChange,
}) => {
  return (
    <RadioContainer
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
      />

      <span>{label}</span>
    </RadioContainer>
  );
};

export default RadioButton;