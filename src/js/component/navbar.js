import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
			</div>
		</nav>*/
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
  <Link to="/">
			<img  className="ps-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" style={{width:"150px"}}/>
				
  </Link>
    
    <div class="collapse navbar-collapse text-white" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
