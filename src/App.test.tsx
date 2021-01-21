import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("should App component return", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it("should render App component", async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
