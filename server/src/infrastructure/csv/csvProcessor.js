/**
 * The CSV processor module provides a function to process CSV file content,
 * parsing it and discarding lines with errors (missing fields).
 */
const csvParser = require('csv-parser');

/**
 * Processes the content of a CSV file, parsing it, and discarding lines with errors.
 *
 * @param {String} fileContent - The content of the CSV file to be processed.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of processed
 * lines, where each element is an object representing the CSV row's data.
 */
const processCSV = (fileContent) => {
    return new Promise((resolve, reject) => {
        const lines = [];
        const parser = csvParser(['file', 'text', 'number', 'hex'], { headers: false });
        let isFirstLine = true;

        parser.on('data', (data) => {
            if (isFirstLine) {
                isFirstLine = false;
                return;
            }

            // Discard lines with errors (missing fields)
            if (data.file && data.text && data.number && data.hex) {
                lines.push(data);
            }
        });

        parser.on('end', () => {
            resolve(lines);
        });

        parser.on('error', (error) => {
            reject(error);
        });

        // Parse the CSV file content
        parser.write(fileContent);
        parser.end();
    });
};

// Exports the processCSV function so it can be used by other modules.
module.exports = {
    processCSV,
};
