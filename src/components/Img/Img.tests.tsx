import React from "react";
import { render, screen } from "@testing-library/react";
import Img from "./Img";

describe("Img Component", () => {
  test("Image is visible", () => {
    render(
      <Img
        src="https://picsum.photos/400/300"
        alt="Sample Image"
      />
    );

    const image = screen.getByAltText("Sample Image");

    expect(image).toBeVisible();
  });

  test("Disabled image has grey background", () => {
    render(
      <Img
        src="https://picsum.photos/400/300"
        alt="Disabled Image"
        disabled
      />
    );

    const wrapper = screen.getByTestId("image-wrapper");

    expect(wrapper).toHaveAttribute("aria-disabled", "true");

    expect(
      window.getComputedStyle(wrapper).backgroundColor
    ).toBe("grey");

    expect(
      window.getComputedStyle(wrapper).cursor
    ).toBe("not-allowed");
  });
});