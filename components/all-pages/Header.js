import React, { useState } from 'react';
import Link from 'next/link';
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
    const dynamicAdressCodeTips = "/code-tips/[tips-subject]"

    return (
        <div>
            <div>
                <Navbar color="light" light expand="md" className='fixed-top'>
                    <NavbarBrand href="/">Pedro Programmer</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className="d-flex justify-content-end">
                        <Nav className={`${!isOpen ? 'd-none' : ''} d-${sizeToggle}-flex`} navbar>
                            <AdressToGo adress="/" name="Home" />
                            <AdressToGo adress="/projects" name="Projects" />
                            {/*
                                <AdressToGo adress="/about" name="About" />                                
                                <AdressToGo adress="/blog" name="Blog" />
                            */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-dark"> Blog </DropdownToggle>
                                <DropdownMenu right>
                                    <Link href='/blog/publications/functions'><DropdownItem><a className="text-dark"> Function </a></DropdownItem></Link>
                                    <Link href='/blog/publications/free-content'><DropdownItem><a className="text-dark"> Free Dev Content </a></DropdownItem></Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-dark"> Dev Tips </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItemToGo adress="dynamicAdressCodeTips" as="/code-tips/react" name="React" />
                                    <DropdownItemToGo adress="dynamicAdressCodeTips" as="/code-tips/next-js" name="Next.js" />
                                    <DropdownItem divider />
                                    <DropdownItemToGo adress="dynamicAdressCodeTips" as="/code-tips/bootstrap" name="Bootstrap" />
                                    <DropdownItemToGo adress="dynamicAdressCodeTips" as="/code-tips/reactstrap" name="ReactStrap" />
                                    <DropdownItemToGo adress="dynamicAdressCodeTips" as="/code-tips/css" name="CSS" />
                                    <DropdownItem divider />
                                    <DropdownItemToGo adress="dynamicAdressCodeTips" as="/code-tips/javascript" name="JavaScript" />
                                    <DropdownItemToGo adress="dynamicAdressCodeTips" as="/code-tips/vs-code" name="VS Code" />
                                    <DropdownItem divider />
                                    <DropdownItemToGo adress="dynamicAdressCodeTips" as="/code-tips/web-tools" name="Web Tools" />
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