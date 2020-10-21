import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  const { getByText } = render(<App />);
  const heading = getByText(/plan and manage your events/i);
  expect(heading).toBeInTheDocument();
});

test("renders app-logo description", () => {
  const { getByAltText } = render(<App />);
  const imgDescription = getByAltText(/logo/i);
  expect(imgDescription).toBeInTheDocument();
});
