import React from "react";
import styled from "styled-components";
import type { CardProps } from "./Card.types";

const StyledCard = styled.article<{
  $backgroundColor: string;
  $textColor: string;
  $disabled: boolean;
}>`
  width: 320px;
  max-width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  background-color: ${(props) =>
    props.$disabled ? "grey" : props.$backgroundColor};

  color: ${(props) =>
    props.$disabled ? "white" : props.$textColor};

  cursor: ${(props) =>
    props.$disabled ? "not-allowed" : "default"};

  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;

  h3 {
    margin: 0 0 12px;
    font-size: 22px;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  backgroundColor = "white",
  textColor = "black",
  disabled = false,
}) => {
  return (
    <StyledCard
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="card-container"
    >
      {imageUrl && <CardImage src={imageUrl} alt={title} />}

      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
    </StyledCard>
  );
};

export default Card;