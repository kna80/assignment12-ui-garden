import React from "react";
import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton Component", () => {
  test("RadioButton is visible", () => {
    render(
      <RadioButton
        label="Select React"
        name="course"
        value="react"
      />
    );

    const radio = screen.getByRole("radio");

    expect(radio).toBeVisible();
    expect(radio).toBeEnabled();
  });

  test("Disabled RadioButton has grey background", () => {
    render(
      <RadioButton
        label="Disabled Radio"
        name="course"
        value="react"
        disabled
      />
    );

    const radio = screen.getByRole("radio");
    const container = screen.getByText("Disabled Radio").closest("label");

    expect(radio).toBeDisabled();
    expect(container).not.toBeNull();

    if (container) {
      expect(
        window.getComputedStyle(container).backgroundColor
      ).toBe("grey");

      expect(
        window.getComputedStyle(container).cursor
      ).toBe("not-allowed");
    }
  });
});