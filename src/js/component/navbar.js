import React, {useContext} from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const {store, action} = useContext(Context);
  const arrayFavoritos = store.favoritos.map((favorito, index) => {
		return (
			<div
				key={index}
				className="d-flex justify-content-between pb-2 ps-3 favoritos"
				id="favorito">
				<Link to="/demo">
					<button className="ms-1 text-white botonFavoritos">{favorito}</button>
				</Link>
			</div>
		);
	});
	return (
		/*<nav className="navbar bg-transparent mb-4 ps-5 pe-5 mt-3">
			<Link to="/">
			<img  className="ps-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" style={{width:"150px"}}/>
				
			</Link>
			<div className="me-auto ps-5">
				<Link to="/">
					<button className="btn btn-dark pe-5">Personas</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-dark pe-5 ms-1">Planetas</button>
				</Link>
			</div>
			<div className="favoritos">
			<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos
          </a>
          <ul className="dropdown-menu ms-auto" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
			</div>
		</nav>*/
<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
  <Link to="/">
			<img  className="ps-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" style={{width:"150px"}}/>
				
  </Link>
  <div className="me-auto ps-5">
				<Link to="/">
					<button className="btn btn-dark pe-5">Personas</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-dark pe-5 ms-1">Planetas</button>
				</Link>
	</div>
    
    <div className="collapse navbar-collapse text-white ms-auto" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos
          </a>
          <ul className="dropdown-menu bg-secondary p-1 text-white" aria-labelledby="navbarDropdownMenuLink">
            {arrayFavoritos} 
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
