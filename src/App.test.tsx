import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders UI Garden heading", () => {
  render(<App />);

  const heading = screen.getByText(/UI Garden — Web Component Library/i);

  expect(heading).toBeInTheDocument();
});