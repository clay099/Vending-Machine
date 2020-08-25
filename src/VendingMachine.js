import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Product from "./Product";
import NavBar from "./NavBar";
import VendingMachineDisplay from "./VendingMachineDisplay";

const VendingMachine = (props) => {
	console.log(props.history);
	return (
		<BrowserRouter>
			<NavBar products={props} />
			<Route exact path={`/`}>
				<VendingMachineDisplay products={props} />
			</Route>
			<Route exact path={`/${props.product1.name}`}>
				<Product product={props.product1} />
			</Route>
			<Route exact path={`/${props.product2.name}`}>
				<Product product={props.product2} />
			</Route>
			<Route exact path={`/${props.product3.name}`}>
				<Product product={props.product3} />
			</Route>
		</BrowserRouter>
	);
};

VendingMachine.defaultProps = {
	product1: {
		name: "Snickers",
		price: 0.99,
		img:
			"https://images-na.ssl-images-amazon.com/images/I/61VpQ3bkRnL._SL1500_.jpg",
	},
	product2: {
		name: "Butterfinger",
		price: 0.87,
		img:
			"https://images.freshop.com/00028000202033/7dde7e4fdffa46cf1726e4a5b1c5dfc1_large.png",
	},
	product3: {
		name: "Twix",
		price: 1.11,
		img:
			"https://www.cvs.com/bizcontent/merchandising/productimages/large/4000046410.jpg",
	},
};

export default VendingMachine;
