import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-secondary bg-transparent mb-4 ps-5 pe-5 mt-3">
			<Link to="/">
			<img  className="ps-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" style={{width:"150px"}}/>
				
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-dark pe-5">Personas</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-dark pe-5">Planetas</button>
				</Link>
				<Link to="/especies">
					<button className="btn btn-dark pe-5">Especies</button>
				</Link>
			</div>
		</nav>
	);
};
