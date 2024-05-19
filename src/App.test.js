import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders header component", () => {
  render(<App />);
  const headerElement = screen.getByClassName("header");
  expect(headerElement).toBeInTheDocument();
});

test("renders footer component", () => {
  render(<App />);
  const footerElement = screen.getByClassName("footer");
  expect(footerElement).toBeInTheDocument();
});
