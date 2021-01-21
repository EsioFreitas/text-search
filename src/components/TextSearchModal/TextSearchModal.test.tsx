import React from "react";
import { render } from "@testing-library/react";
import TextSearchModal from ".";
import { SearchText } from "../../models/SearchText";

describe("TextSearchCard tests", () => {
  const searchText: SearchText = {
    id: "asdew",
    title: "efadasdas",
    status: "active",
    urls: [],
  };
  it("should TextSearchCard component return", () => {
    const { baseElement } = render(
      <TextSearchModal
        isOpen={false}
        searchText={searchText}
        toggle={() => {}}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render TextSearchCard component", async () => {
    const { container } = render(
      <TextSearchModal
        isOpen={false}
        searchText={searchText}
        toggle={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
