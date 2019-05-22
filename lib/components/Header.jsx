import PropTypes from 'prop-types';
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const propTypes = {
    activePath: PropTypes.string.isRequired,
    headerTitle: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            path: PropTypes.string
        })
    ).isRequired
};

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { expanded: false };

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
                        <a href="#">{this.props.headerTitle}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav activeHref={`#${this.props.activePath}`}>
                        {this.props.links.map(link => (
                            <NavItem
                                onClick={this.onNavItemClick}
                                href={`#${link.path}`}
                                key={`path_${link.path}`}
                            >
                                {link.title}
                            </NavItem>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

Header.propTypes = propTypes;

export default Header;
