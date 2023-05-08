// eslint-disable-next-line no-unused-vars
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FileData from "./../../../../domain/entities/FileData";
import FileTable from "../FileTable";

describe("FileTable", () => {
  it("renders a table with the correct data", () => {

    const filesData = [
      new FileData("test1.csv", "text1", "1", "hex1"),
      new FileData("test1.csv", "text2", "2", "hex2"),
    ];

    const { getByText, getAllByText } = render(<FileTable filesData={filesData} />);

    expect(getByText("File Name")).toBeInTheDocument();
    expect(getByText("Text")).toBeInTheDocument();
    expect(getByText("Number")).toBeInTheDocument();
    expect(getByText("Hex")).toBeInTheDocument();

    expect(getAllByText("test1.csv").length).toBeGreaterThan(0);
    
    expect(getByText("text1")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("hex1")).toBeInTheDocument();
    expect(getByText("text2")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("hex2")).toBeInTheDocument();
  
  });
});