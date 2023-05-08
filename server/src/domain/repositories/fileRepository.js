/**
 * The FileRepository class is an abstract interface that defines
 * the necessary methods for interacting with a file repository.
 * This class should be extended by concrete classes that implement
 * the functionality for storing and retrieving files.
 */
class FileRepository {
    /**
     * Asynchronous method that retrieves the list of files stored in the repository.
     * This method should be implemented in classes that inherit from FileRepository.
     *
     * @throws {Error} Throws an error if the method is not implemented.
     * @returns {Promise<Array<String>>} A promise that resolves to an array of file names.
     */
    async getFilesList() {
      throw new Error('Not implemented');
    }
  
    /**
     * Asynchronous method that retrieves the content of a specific file from the repository,
     * given its name. This method should be implemented in classes that inherit from FileRepository.
     *
     * @param {String} fileName - The name of the file whose content is to be retrieved.
     * @throws {Error} Throws an error if the method is not implemented.
     * @returns {Promise<String>} A promise that resolves to the requested file's content.
     */
    async getFileContent(fileName) {
      throw new Error('Not implemented');
    }
  }
  
  // Exports the FileRepository class so it can be used by other modules.
  module.exports = FileRepository;
  