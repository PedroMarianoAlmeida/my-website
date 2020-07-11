import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import AdressToGo from './AdressToGo'
import DropdownItemToGo from './DropdownItemToGo'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const sizeToggle = "md";

    return (
        <div>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Pedro Programmer</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className="d-flex justify-content-end">
                        <Nav className={`${!isOpen ? 'd-none' : ''} d-${sizeToggle}-flex`} navbar>
                            <AdressToGo adress="/" name="Home" />
                            <AdressToGo adress="/about" name="About" />
                            <AdressToGo adress="/contact" name="Contact" />
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-dark"> Dev Tips </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItemToGo adress="code-tips/bootstrap" name="Bootstrap" />
                                    <DropdownItemToGo adress="code-tips/reactstrap" name="ReactStrap" />
                                    <DropdownItemToGo adress="code-tips/css" name="CSS" />
                                    <DropdownItem divider />
                                    <DropdownItemToGo adress="code-tips/javascript" name="JavaScript" />
                                    <DropdownItemToGo adress="code-tips/vs-code" name="VS Code" />
                                    <DropdownItem divider />
                                    <DropdownItemToGo adress="code-tips/web-api" name="Web API" />

                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;