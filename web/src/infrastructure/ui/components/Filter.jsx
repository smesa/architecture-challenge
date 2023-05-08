/**
 * FileTable component is a React component that renders a table of file data
 * using the React-Bootstrap library.
 *
 * @module FileTable
 */

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import FileData from "./../../../domain/entities/FileData";

/**
 * FileTable component renders a table with file data, displaying the file name,
 * text, number, and hex values in separate columns.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array<FileData>} props.filesData - An array of FileData objects.
 * @returns {JSX.Element} The rendered FileTable component.
 */
const FileTable = ({ filesData }) => {
    return (
        <Container style={{padding: '1em 0'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {filesData.map((fileData, index) => (
                        <tr key={index}>
                            <td>{fileData.file}</td>
                            <td>{fileData.text}</td>
                            <td>{fileData.number}</td>
                            <td>{fileData.hex}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

FileTable.propTypes = {
    filesData: PropTypes.arrayOf(PropTypes.instanceOf(FileData)).isRequired,
};

export default FileTable;