// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Filter from "../Filter";

describe("Filter", () => {
  it("renders filter input and handles input change", () => {
    const mockSetFilter = jest.fn();
    const { getByPlaceholderText } = render(
      <Filter filter="test" setFilter={mockSetFilter} />
    );

    const filterInput = getByPlaceholderText("Enter file name");

    expect(filterInput).toBeInTheDocument();
    expect(filterInput.value).toBe("test");

    fireEvent.change(filterInput, { target: { value: "new-test" } });

    expect(mockSetFilter).toHaveBeenCalledWith("new-test");
  });
});