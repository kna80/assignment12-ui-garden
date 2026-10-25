import React from "react";
import styled from "styled-components";
import type { DropdownProps } from "./Dropdown.types";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 250px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledSelect = styled.select<{
  $backgroundColor: string;
  $textColor: string;
}>`
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 16px;

  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};

  cursor: pointer;

  &:disabled {
    background-color: grey;
    color: white;
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 600px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  backgroundColor = "white",
  textColor = "black",
  disabled = false,
  onChange,
}) => {
  return (
    <DropdownContainer>
      <label htmlFor="dropdown-select">{label}</label>

      <StyledSelect
        id="dropdown-select"
        $backgroundColor={backgroundColor}
        $textColor={textColor}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.value)}
      >
        <option value="">Select an option</option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </DropdownContainer>
  );
};

export default Dropdown;