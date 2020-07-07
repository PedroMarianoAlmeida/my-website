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
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const sizeToggle = "md"

    return (
        <div>
            <Navbar color="light" light expand={sizeToggle} className="d-flex justify-content-between">
                <NavbarBrand><Link href="/"><a className="text-dark">Pedro Programmer</a></Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <div className={`align-content-end mr-1 d-none d-${sizeToggle}-flex`}>
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar >
                        <NavItem>
                            <NavLink><Link href="/"><a className="text-dark">Home</a></Link></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink><Link href="/about"><a className="text-dark">About</a></Link></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink><Link href="/blog"><a className="text-dark">Blog</a></Link></NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <span className="text-dark">Dev Tips</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link href="/code-tips/next-js"><a className="text-dark">Next.js</a></Link>
                                </DropdownItem>

                                <DropdownItem>
                                    <Link href="/code-tipsreact"><a className="text-dark">React</a></Link>
                                </DropdownItem>

                                <DropdownItem divider />

                                <DropdownItem>                                   
                                    <Link href="/code-tips/bootstrap"><a className="text-dark">Bootstrap</a></Link>
                                </DropdownItem>

                                <DropdownItem>
                                    <Link href="/code-tips/next-js"><a className="text-dark">ReactStrap</a></Link>
                                </DropdownItem>

                                <DropdownItem divider />

                                <DropdownItem>
                                    <Link href="/code-tips/next-js"><a className="text-dark">JavaScript</a></Link>
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