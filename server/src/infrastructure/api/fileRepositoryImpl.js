/**
 * The FileRepositoryImpl class is a concrete implementation of the FileRepository
 * abstract class, using an HTTP client for fetching files and their content.
 */
const { fetchFilesList, fetchFileContent } = require('../http/httpClient');
const FileRepository = require('../../domain/repositories/fileRepository');

class FileRepositoryImpl extends FileRepository {
  /**
   * Asynchronously retrieves the list of files stored in the repository using
   * the fetchFilesList function from the HTTP client.
   *
   * @returns {Promise<Array<String>>} A promise that resolves to an array of file names.
   */
  async getFilesList() {
    return fetchFilesList();
  }

  /**
   * Asynchronously retrieves the content of a specific file from the repository,
   * given its name, using the fetchFileContent function from the HTTP client.
   *
   * @param {String} fileName - The name of the file whose content is to be retrieved.
   * @returns {Promise<String>} A promise that resolves to the requested file's content.
   */
  async getFileContent(fileName) {
    return fetchFileContent(fileName);
  }
}

// Exports the FileRepositoryImpl class so it can be used by other modules.
module.exports = FileRepositoryImpl;
