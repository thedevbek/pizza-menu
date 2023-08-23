import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozzarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozzarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozzarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

const Header = () => {
	const style = {};
	return (
		<header className='header'>
			<h1 style={style}>Bek's React Pizza Shoppe</h1>
			<h2 style={{ color: "red" }}>Asking for PINEAPPLE is a mortal sin....</h2>
		</header>
	);
};

const Menu = () => {
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;

	return (
		<main className='menu'>
			<h2>Our Menu</h2>

			{numPizzas > 0 && (
				<ul className='pizzas'>
					{pizzas.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			)}
		</main>
	);
};

function Pizza({pizzaObj}) {
	if (pizzaObj.soldOut) return null;

	return (
		<li className='pizza'>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.price}</span>
				<p>{pizzaObj.soldOut}</p>
			</div>
		</li>
	);
}

const Footer = () => {
	const hour = new Date().getHours();
	const openHour = 11;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log("isOpen");
	// if(hour >= openHour && hour <= closeHour)
	// alert(`We're currently open!`);
	// else alert(`We're currently closed!`);

	return (
		<footer className='footer'>
			{isOpen ? (
				<Order closeHour={closeHour}  openHour={openHour}/>
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 and {closeHour}:00.
				</p>
			)}
		</footer>
	);
};

function Order({ openHour, closeHour }) {
	return (
		<div className='order'>
			<p>
				We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online
			</p>
			<button className='btn'>Order</button>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
