import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navigation, activeStyle } from './header.css';

const Header: React.FC = () => {
	return (
		<Navigation>
			<NavLink exact to="/" activeStyle={activeStyle}>
				HOME
			</NavLink>

			<NavLink exact to="/comments" activeStyle={activeStyle}>
				COMMENTS
			</NavLink>
		</Navigation>
	);
};

export default Header;
