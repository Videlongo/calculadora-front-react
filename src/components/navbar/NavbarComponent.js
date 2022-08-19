import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from "reactstrap";

const NavbarComponent = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="white" light expand="md">
				<NavbarBrand>Calc</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<Link className="nav-link" to="/suma">
								SUMA
							</Link>
						</NavItem>
						<NavItem>
							<Link className="nav-link" to="/resta">
								RESTA
							</Link>
						</NavItem>
						<NavItem>
							<Link className="nav-link" to="/division">
								DIVISIÓN
							</Link>
						</NavItem>
						<NavItem>
							<Link className="nav-link" to="/multiplicacion">
								MULTIPLICACIÓN
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
