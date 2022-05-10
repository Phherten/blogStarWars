import React, {useContext} from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const {store, actions} = useContext(Context);
 
	return (
		
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
		  {store.favoritos.length == 0 ? "No hay favoritos" : Object.entries(store.favoritos).map(([key,value]) => {
	
	return (
		
			<div
				key={key}
				className="d-flex justify-content-between pb-2 ps-3 favoritos"
				id="favorito">
				<Link to={value.tipo + value.indice}  >
					<button className="ms-1 text-white botonFavoritos">{value.name}</button>
				</Link>
				
			</div>
		);
	})};
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
