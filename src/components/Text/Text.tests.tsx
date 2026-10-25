import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text Component", () => {
  test("Text is visible", () => {
    render(<Text text="Hello Text" />);

    const text = screen.getByText("Hello Text");

    expect(text).toBeVisible();
  });

  test("Disabled text has grey background", () => {
    render(<Text text="Disabled Text" disabled />);

    const text = screen.getByText("Disabled Text");

    expect(text).toHaveAttribute("aria-disabled", "true");

    expect(window.getComputedStyle(text).backgroundColor).toBe("grey");

    expect(window.getComputedStyle(text).cursor).toBe("not-allowed");
  });
});