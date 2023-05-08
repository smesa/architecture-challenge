/**
 * This module defines a FileDataApi class, which is responsible for
 * fetching file data from an external API.
 */
class FileDataApi {
    /**
     * Fetches file data from the external API.
     *
     * @returns {Promise<Array<Object>>} A promise that resolves to an array of file data objects.
     */
    async getFilesData() {
      const response = await fetch("http://localhost:3000/files/data");
      const data = await response.json();
      return data;
    }
  }
  
  export default FileDataApi;
  