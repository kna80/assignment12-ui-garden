import React from "react";
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

describe("HeroImage Component", () => {
  test("HeroImage is visible", () => {
    render(
      <HeroImage
        src="https://picsum.photos/1200/500"
        alt="Beautiful landscape"
        title="Welcome to UI Garden"
        subtitle="Reusable React components"
      />
    );

    expect(
      screen.getByText("Welcome to UI Garden")
    ).toBeVisible();

    expect(
      screen.getByAltText("Beautiful landscape")
    ).toBeVisible();
  });

  test("Disabled HeroImage has grey background", () => {
    render(
      <HeroImage
        src="https://picsum.photos/1200/500"
        alt="Disabled landscape"
        title="Disabled Hero"
        disabled
      />
    );

    const hero = screen.getByTestId("hero-container");

    expect(hero).toHaveAttribute("aria-disabled", "true");

    expect(
      window.getComputedStyle(hero).backgroundColor
    ).toBe("grey");

    expect(
      window.getComputedStyle(hero).cursor
    ).toBe("not-allowed");
  });
});