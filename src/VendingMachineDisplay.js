import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachineDisplay.css";

const VendingMachineDisplay = ({ products }) => {
	return (
		<div className="VendingMachineDisplay">
			<h1>Vending Machine</h1>
			<h4>What would you like to eat?</h4>
			<ul>
				{Object.values(products).map((product) => (
					<li>
						<Link to={`/${product.name}`}>{product.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default VendingMachineDisplay;
