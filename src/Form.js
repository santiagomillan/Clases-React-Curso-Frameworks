import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  font-family: "Courier New", Courier, monospace;
  padding: 10px 25px 25px;
  text-align: center;
  transform: scale(1);
  transition: 0.3s transform;

  &:hover {
    transform: scale(1.2);
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid transparent;
  transition: 0.15s border-color;

  &:hover {
    border-color: ${(p) => p.theme.color2};
  }

  &:disabled {
    background-color: ${(p) => p.theme.color2};
  }
`;

export default function Form(props) {
  const [quantity, setQuantity] = React.useState(0);
  const { movie } = props;
  return (
    <StyledForm onMouseEnter={() => props.updateTheme()}>
      <h3>{movie.name}</h3>
      <Button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
      >
        -
      </Button>
      {quantity}
      <Button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity >= movie.available}
      >
        +
      </Button>
    </StyledForm>
  );
}
