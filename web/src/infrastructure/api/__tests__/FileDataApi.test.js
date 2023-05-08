/**
 * This module contains tests for the FileDataApi class, which is responsible
 * for fetching file data from an external API.
 */

import FileDataApi from "../FileDataApi";
import fetchMock from "jest-fetch-mock";

describe("FileDataApi", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("getFilesData fetches data correctly", async () => {
    const mockData = [
      {
        file: "test1.csv",
        lines: [],
      },
      {
        file: "test2.csv",
        lines: [
          {
            file: "test2.csv",
            text: "QHgxQOPDoUzee",
            number: "6",
            hex: "2e0dd76af0ecaca0e3ba8bf7184ce041",
          },
        ],
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const fileDataApi = new FileDataApi();
    const data = await fileDataApi.getFilesData();

    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3000/files/data");
    expect(data).toEqual(mockData);
  });

  test("getFilesData throws an error if the API request fails", async () => {
    fetchMock.mockRejectOnce(new Error("API request failed"));

    const fileDataApi = new FileDataApi();

    await expect(fileDataApi.getFilesData()).rejects.toThrow(
      "API request failed"
    );
  });
});
