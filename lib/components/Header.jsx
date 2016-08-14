import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const propTypes = {
  title: PropTypes.string.isRequired,
};

function Header(props) {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">{props.title}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Config</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = propTypes;

export default Header;
