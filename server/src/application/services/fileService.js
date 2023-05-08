/**
 * The FileService class is responsible for managing files, fetching and processing
 * them using the provided file repository and CSV processor implementations.
 */
const FileRepositoryImpl = require('../../infrastructure/api/fileRepositoryImpl');
const { processCSV } = require('../../infrastructure/csv/csvProcessor');

class FileService {
  /**
   * Constructs a new instance of the FileService class.
   *
   * @param {FileRepositoryImpl} fileRepository - An optional instance of a file repository.
   * If not provided, a default instance of FileRepositoryImpl will be created.
   */
  constructor(fileRepository = new FileRepositoryImpl()) {
    this.fileRepository = fileRepository;
  }

  /**
   * Asynchronously fetches and processes the files stored in the file repository.
   *
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of processed files,
   * where each element is an object containing the file name and its processed content.
   */
  async fetchAndProcessFiles() {
    const files = await this.fileRepository.getFilesList();
    const processedFiles = [];

    for (const file of files) {
      try {
        const fileContent = await this.fileRepository.getFileContent(file);
        const processedContent = await processCSV(fileContent);
        processedFiles.push({
          file,
          lines: processedContent,
        });
      } catch (error) {
        console.error(`Error processing file ${file}: ${error.message}`);
      }
    }

    return processedFiles;
  }
}

// Exports the FileService class so it can be used by other modules.
module.exports = FileService;
