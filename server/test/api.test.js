/**
 * This module contains a series of tests for the API, httpClient, csvProcessor, and FileService.
 */
const { expect } = require('chai');

const FileService = require('../src/application/services/fileService');
const httpClient = require('../src/infrastructure/http/httpClient');
const csvProcessor = require('../src/infrastructure/csv/csvProcessor');

describe('API', () => {
  describe('httpClient', () => {
    describe('fetchFilesList', () => {
      it('should return a list of files', async () => {
        const files = await httpClient.fetchFilesList();
        expect(files).to.be.an('array');
        expect(files).to.not.be.empty;
        files.forEach(file => {
          expect(file).to.be.a('string');
          expect(file).to.match(/\.csv$/);
        });
      });
    });

    describe('fetchFileContent', () => {
      it('should return the content of a specific file', async () => {
        const fileName = 'test1.csv';
        const content = await httpClient.fetchFileContent(fileName);
        expect(content).to.be.a('string');
      });

      it('should return an error if the file does not exist', async () => {
        const fileName = 'nonexistent.csv';
        try {
          await httpClient.fetchFileContent(fileName);
        } catch (error) {
          expect(error).to.have.property('isAxiosError', true);
          expect(error.response.status).to.equal(404);
        }
      });
    });
  });

  describe('csvProcessor', () => {
    it('should correctly process CSV content and return valid JSON objects', async () => {
      const csvContent = 'file,text,number,hex\ntest1.csv,abcdef,123456,abcdef123456\n';
      const result = await csvProcessor.processCSV(csvContent);
      expect(result).to.be.an('array');
      expect(result).to.have.lengthOf(1);

      const line = result[0];
      expect(line).to.have.property('file', 'test1.csv');
      expect(line).to.have.property('text', 'abcdef');
      expect(line).to.have.property('number', '123456');
      expect(line).to.have.property('hex', 'abcdef123456');
    });

    it('should discard lines with errors', async () => {
      const csvContent = 'file,text,number,hex\ntest1.csv,abcdef,123456\n';
      const result = await csvProcessor.processCSV(csvContent);
      expect(result).to.be.an('array');
      expect(result).to.be.empty;
    });
  });

  describe('FileService', () => {
    const fileService = new FileService();
    
    it('should return an array of processed files', async () => {
      const data = await fileService.fetchAndProcessFiles();
      expect(data).to.be.an('array');
      expect(data).to.not.be.empty;

      data.forEach(file => {
        expect(file).to.have.property('file');
        expect(file).to.have.property('lines').that.is.an('array');
      });
    });
  });
});
