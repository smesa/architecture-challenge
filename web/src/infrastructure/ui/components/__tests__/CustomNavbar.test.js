// eslint-disable-next-line no-unused-vars
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomNavbar from "../CustomNavbar";

describe("CustomNavbar", () => {
  it("renders navbar with title and filter input", () => {
    const { getByText, getByPlaceholderText } = render(
      <CustomNavbar filter="" setFilter={() => {}} />
    );

    expect(getByText("React Test App")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter file name")).toBeInTheDocument();
  });
});