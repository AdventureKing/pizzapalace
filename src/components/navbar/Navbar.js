import React from 'react';
import PropTypes from 'prop-types';
import {
NavBtn,
NavBtnLink,
Nav,
NavLink,
NavMenu,
Bars,
LogOutCircle,
} from './NavbarStyles';

const Navbar = ({logout}) => {

	

	return (
		<>
		<Nav>
			<Bars />
			<h1 style={{color: "white"}}>Pizza Palace</h1>
			<NavMenu>
			<NavLink to='/dashboard' >
				Your Orders
			</NavLink>
			<NavLink to='/orders' >
				Place Orders
			</NavLink>
			</NavMenu>
			<NavBtn>
			<NavBtnLink to="/" onClick={() => logout()}><LogOutCircle/> Sign out</NavBtnLink>
			</NavBtn>
		</Nav>
		</>
	);
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired
}

export default Navbar;
