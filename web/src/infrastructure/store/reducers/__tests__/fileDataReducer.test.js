import fileDataReducer from '../fileDataReducer';
import { FETCH_FILES_DATA } from '../../actions/fileDataActions';

describe('fileDataReducer', () => {
    it('should return the initial state', () => {
        expect(fileDataReducer(undefined, {})).toEqual([]);
    });

    it('should handle FETCH_FILES_DATA', () => {
        const samplePayload = [
            { file: 'test1.csv', lines: [] },
            { file: 'test2.csv', lines: [{ file: 'test2.csv', text: 'QHgxQOPDoUzee', number: '6', hex: '2e0dd76af0ecaca0e3ba8bf7184ce041' }] },
        ];

        const action = {
            type: FETCH_FILES_DATA,
            payload: samplePayload,
        };

        expect(fileDataReducer([], action)).toEqual(samplePayload);
    });
});