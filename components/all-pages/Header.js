import React, { useState } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const sizeToggle = "md"

    return (
        <div>
            <Navbar color="light" light expand={sizeToggle} className="d-flex justify-content-between">
                <NavbarBrand><Link href="/"><span className="text-dark clickable">Pedro Programmer</span></Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <div className={`align-content-end mr-1 d-none d-${sizeToggle}-flex`}>
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar >
                        <NavItem className="mx-2">
                            <NavLink><Link href="/"><span className="text-dark clickable">Home</span></Link></NavLink>
                        </NavItem>

                        <NavItem className="mx-2">
                            <NavLink><Link href="/about"><span className="text-dark clickable">About</span></Link></NavLink>
                        </NavItem>

                        <NavItem className="mx-2">
                            <NavLink><Link href="/blog"><span className="text-dark clickable">Blog</span></Link></NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <span className="text-dark mx-2">Dev Tips</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link href="/code-tips/next-js"><span className="text-dark">Next.js</span></Link>
                                </DropdownItem>

                                <DropdownItem>
                                    <Link href="/code-tips/react"><span className="text-dark">React</span></Link>
                                </DropdownItem>

                                <DropdownItem divider />

                                <DropdownItem>                                   
                                    <Link href="/code-tips/bootstrap"><span className="text-dark">Bootstrap</span></Link>
                                </DropdownItem>

                                <DropdownItem>
                                    <Link href="/code-tips/reactstrap"><span className="text-dark">ReactStrap</span></Link>
                                </DropdownItem>

                                <DropdownItem>
                                    <Link href="/code-tips/css"><span className="text-dark">CSS</span></Link>
                                </DropdownItem>

                                <DropdownItem divider />

                                <DropdownItem>
                                    <Link href="/code-tips/javascript"><span className="text-dark">JavaScript</span></Link>
                                </DropdownItem>

                                <DropdownItem>
                                    <Link href="/code-tips/vs-code"><span className="text-dark">VS Code</span></Link>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;