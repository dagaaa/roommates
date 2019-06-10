import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class Menubar extends Component {
    isActive = (value) => (window.location.pathname === value ? 'active' : 'navstyle');
    render() {
        return (
            <Navbar className="navbackground" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto menuitem">
                        <Nav.Link className={this.isActive('/')} exact path="/" href="/">Duties</Nav.Link>
                        <Nav.Link className={this.isActive('/duties')} href="/duties">New Duty</Nav.Link>
                        <Nav.Link className={this.isActive('/history')} href="/history">History</Nav.Link>
                        <Nav.Link className={this.isActive('/ranking')} href="/ranking">Ranking</Nav.Link>
                        <Nav.Link className="logout" href="/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default Menubar;