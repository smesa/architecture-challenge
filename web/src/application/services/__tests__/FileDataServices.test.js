/**
 * This module contains test cases for the FileDataService class.
 */
import FileDataService from '../FileDataServices';

describe('FileDataService', () => {
  // Mock the fileDataApi dependency
  const fileDataApiMock = {
    getFilesData: jest.fn(),
  };

  const testData = [
    {
      file: 'test1.csv',
      lines: [],
    },
    {
      file: 'test2.csv',
      lines: [
        {
          file: 'test2.csv',
          text: 'QHgxQOPDoUzee',
          number: '6',
          hex: '2e0dd76af0ecaca0e3ba8bf7184ce041',
        },
      ],
    },
  ];

  // Reset the mock before each test
  beforeEach(() => {
    fileDataApiMock.getFilesData.mockResolvedValue(testData);
  });

  // Clear all mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test that getFilesData is called on the fileDataApi
  it('should call getFilesData from fileDataApi', async () => {
    const fileDataService = new FileDataService(fileDataApiMock);
    await fileDataService.getFileData();
    expect(fileDataApiMock.getFilesData).toHaveBeenCalledTimes(1);
  });

  // Test that the combined file data list is returned correctly
  it('should return the combined file data list', async () => {
    const fileDataService = new FileDataService(fileDataApiMock);
    const fileDataList = await fileDataService.getFileData();

    const expectedFileDataList = [
      {
        file: 'test2.csv',
        text: 'QHgxQOPDoUzee',
        number: '6',
        hex: '2e0dd76af0ecaca0e3ba8bf7184ce041',
      },
    ];

    expect(fileDataList).toEqual(expectedFileDataList);
  });
});
