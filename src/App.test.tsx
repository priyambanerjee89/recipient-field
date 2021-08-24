import React from "react";
import { render, screen } from "@testing-library/react";
import EmailInput from "./App";

test("renders learn react link", () => {
  render(<EmailInput />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
