import React from "react";
import { render } from "@testing-library/react";
import TextSearchCard from "./";

describe("TextSearchCard tests", () => {
  it("should TextSearchCard component return", () => {
    const { baseElement } = render(
      <TextSearchCard
        searchText={{
          id: "",
          status: "",
          urls: [],
          title: "",
        }}
        toggle={() => {}}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render TextSearchCard component", async () => {
    const { container } = render(
      <TextSearchCard
        searchText={{
          id: "",
          status: "",
          urls: [],
          title: "",
        }}
        toggle={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
