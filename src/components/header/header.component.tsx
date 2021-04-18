import React from 'react';
import { NavLink } from 'react-router-dom';

//import './header.css.tsx';

const Header: React.FC = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink to="/">HOME</NavLink>
					</li>
					<li>
						<NavLink to="/comments">COMMENTS</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
