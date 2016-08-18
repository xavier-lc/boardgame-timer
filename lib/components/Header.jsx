import React, { PropTypes } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const propTypes = {
  activePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.onNavbarToggle = this.onNavbarToggle.bind(this);
    this.onNavItemClick = this.onNavItemClick.bind(this);
  }

  onNavbarToggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  onNavItemClick() {
    this.setState({ expanded: false });
  }

  render() {
    return (
      <Navbar
        fixedTop
        expanded={this.state.expanded}
        onToggle={this.onNavbarToggle}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{this.props.title}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav activeHref={`#${this.props.activePath}`}>
            <NavItem onClick={this.onNavItemClick} href="#/">Timer</NavItem>
            <NavItem onClick={this.onNavItemClick} href="#/config">Config</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = propTypes;

function HeaderContainer(props) {
  return (
    <div>
      <Header
        activePath={props.location.pathname}
        title={props.route.title}
      />

      <div className="container container--pastNav">
        {props.children}
      </div>
    </div>
  );
}

export default HeaderContainer;
