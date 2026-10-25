import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  test("Card is visible", () => {
    render(
      <Card
        title="React Card"
        description="Reusable React component"
      />
    );

    expect(screen.getByText("React Card")).toBeVisible();
    expect(
      screen.getByText("Reusable React component")
    ).toBeVisible();
  });

  test("Disabled Card has grey background", () => {
    render(
      <Card
        title="Disabled Card"
        description="This card is disabled"
        disabled
      />
    );

    const card = screen.getByTestId("card-container");

    expect(card).toHaveAttribute("aria-disabled", "true");

    expect(
      window.getComputedStyle(card).backgroundColor
    ).toBe("grey");

    expect(
      window.getComputedStyle(card).cursor
    ).toBe("not-allowed");
  });
});