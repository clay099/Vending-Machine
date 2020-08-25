import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = ({ products }) => {
	return (
		<nav className="NavBar">
			<NavLink exact to={`/`}>
				Home
			</NavLink>
			<NavLink exact to={`/${products.product1.name}`}>
				{products.product1.name}
			</NavLink>
			<NavLink exact to={`/${products.product2.name}`}>
				{products.product2.name}
			</NavLink>
			<NavLink exact to={`/${products.product3.name}`}>
				{products.product3.name}
			</NavLink>
		</nav>
	);
};

export default NavBar;
