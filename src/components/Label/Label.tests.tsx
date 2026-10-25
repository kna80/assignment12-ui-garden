import React from "react";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label Component", () => {
  test("Label is visible", () => {
    render(<Label text="Hello Label" />);

    const label = screen.getByText("Hello Label");

    expect(label).toBeVisible();
  });

  test("Disabled label has grey background", () => {
    render(<Label text="Disabled Label" disabled />);

    const label = screen.getByText("Disabled Label");

    expect(label).toHaveAttribute("aria-disabled", "true");

   expect(window.getComputedStyle(label).backgroundColor).toBe("grey");

    expect(window.getComputedStyle(label).cursor).toBe("not-allowed");
  });
});