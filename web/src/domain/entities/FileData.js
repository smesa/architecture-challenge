/**
 * This module defines a FileData class, which represents a single data entry
 * from a processed file.
 */
export default class FileData {
    /**
     * Constructs a FileData instance with the given properties.
     *
     * @param {string} file - The name of the file from which the data originates.
     * @param {string} text - The text value in the data.
     * @param {string} number - The number value in the data.
     * @param {string} hex - The hexadecimal value in the data.
     */
    constructor(file, text, number, hex) {
      this.file = file;
      this.text = text;
      this.number = number;
      this.hex = hex;
    }
  }
  