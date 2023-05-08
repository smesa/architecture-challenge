/**
 * The HTTP client module provides functions to interact with the external API
 * for fetching files and their content using the axios library.
 */
const axios = require('axios');

// The base URL for the API and the API key used for authentication
const API_BASE_URL = 'https://echo-serv.tbxnet.com/v1/secret';
const API_KEY = 'aSuperSecretKey';

/**
 * Constructs the headers object for API requests, including the Authorization header.
 *
 * @returns {Object} An object containing the headers required for API requests.
 */
const getHeaders = () => ({
    'Authorization': `Bearer ${API_KEY}`,
});

/**
 * Asynchronously fetches the list of files from the external API.
 *
 * @returns {Promise<Array<String>>} A promise that resolves to an array of file names.
 */
const fetchFilesList = async () => {
    const response = await axios.get(`${API_BASE_URL}/files`, { headers: getHeaders() });
    return response.data.files;
};

/**
 * Asynchronously fetches the content of a specific file from the external API,
 * given its name.
 *
 * @param {String} fileName - The name of the file whose content is to be retrieved.
 * @returns {Promise<String>} A promise that resolves to the requested file's content.
 */
const fetchFileContent = async (fileName) => {
    const response = await axios.get(`${API_BASE_URL}/file/${fileName}`, { headers: getHeaders() });
    return response.data;
};

// Exports the fetchFilesList and fetchFileContent functions so they can be used by other modules.
module.exports = {
    fetchFilesList,
    fetchFileContent,
};
