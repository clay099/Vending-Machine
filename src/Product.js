import React from "react";
import "./Product.css";
import { Link, useHistory } from "react-router-dom";

const Product = ({ product }) => {
	const { name, img, price } = product;
	let history = useHistory();

	const handleClick = () => history.goBack();
	return (
		<div className="Product">
			<h1>{name}</h1>
			<img src={img} alt={name} />
			<h3>Price: ${price}</h3>
			<h3>
				<Link onClick={handleClick}>Go Back</Link>
			</h3>
		</div>
	);
};

export default Product;
