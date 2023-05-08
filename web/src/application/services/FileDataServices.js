/**
 * This module defines a FileDataService class, which is responsible for
 * fetching and processing file data using a provided fileDataApi.
 */
import FileData from './../../domain/entities/FileData';

export default class FileDataService {
  constructor(fileDataApi) {
    this.fileDataApi = fileDataApi;
  }

  /**
   * Fetches file data using the fileDataApi and combines the data into a single
   * array of FileData instances.
   *
   * @returns {Promise<Array<FileData>>} A promise that resolves to an array of FileData instances.
   */
  async getFileData() {
    const fileDataList = await this.fileDataApi.getFilesData();
    const combinedFileDataList = [];

    for (const fileData of fileDataList) {
      const { file, lines } = fileData;
      for (const line of lines) {
        combinedFileDataList.push(new FileData(file, line.text, line.number, line.hex));
      }
    }

    return combinedFileDataList;
  }
}
