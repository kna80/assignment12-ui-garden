import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const options = ["React", "TypeScript", "JavaScript"];

  test("Dropdown is visible", () => {
    render(
      <Dropdown
        label="Choose a Course"
        options={options}
      />
    );

    const dropdown = screen.getByRole("combobox");

    expect(dropdown).toBeVisible();
    expect(dropdown).toBeEnabled();
  });

  test("Disabled dropdown has grey background", () => {
    render(
      <Dropdown
        label="Choose a Course"
        options={options}
        disabled
      />
    );

    const dropdown = screen.getByRole("combobox");

    expect(dropdown).toBeDisabled();

    expect(
      window.getComputedStyle(dropdown).backgroundColor
    ).toBe("grey");

    expect(
      window.getComputedStyle(dropdown).cursor
    ).toBe("not-allowed");
  });
});