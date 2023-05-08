/**
 * CustomNavbar component is a React component that renders a customized
 * navigation bar using the React-Bootstrap library.
 *
 * @module CustomNavbar
 */

// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import Filter from "./Filter";

/**
 * CustomNavbar component renders a navigation bar with a brand name,
 * a toggle button for mobile devices, and a Filter component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.filter - The current filter value.
 * @param {Function} props.setFilter - A function to update the filter value.
 * @returns {JSX.Element} The rendered CustomNavbar component.
 */
const CustomNavbar = ({ filter, setFilter }) => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "rgb(227,73,81)" }}>
      <Navbar.Brand href="#" style={{ color: "white", padding: '0 .5em' }}>
        React Test App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Filter filter={filter} setFilter={setFilter} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

CustomNavbar.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default CustomNavbar;
