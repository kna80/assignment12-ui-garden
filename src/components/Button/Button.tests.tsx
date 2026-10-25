import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {

  test("Button is visible", () => {
    render(<Button label="Click Me" />);

    const button = screen.getByRole("button");

    expect(button).toBeVisible();
  });

  test("Disabled button has grey background", () => {
    render(<Button label="Disabled" disabled />);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();

    expect(button).toHaveStyle({
      backgroundColor: "grey",
    });
  });

});