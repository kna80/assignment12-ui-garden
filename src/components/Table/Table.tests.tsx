import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
  const headers = ["ID", "Name"];

  const rows = [
    ["1", "John"],
    ["2", "Sarah"],
  ];

  test("Table is visible", () => {
    render(
      <Table
        headers={headers}
        rows={rows}
        footer="Total: 2"
      />
    );

    const table = screen.getByRole("table");

    expect(table).toBeVisible();
    expect(screen.getByText("John")).toBeVisible();
    expect(screen.getByText("Total: 2")).toBeVisible();
  });

  test("Disabled table has grey background", () => {
    render(
      <Table
        headers={headers}
        rows={rows}
        disabled
      />
    );

    const table = screen.getByRole("table");

    expect(table).toHaveAttribute(
      "aria-disabled",
      "true"
    );

    expect(
      window.getComputedStyle(table).backgroundColor
    ).toBe("grey");

    expect(
      window.getComputedStyle(table).cursor
    ).toBe("not-allowed");
  });
});