import React, {useContext} from "react";
import "../../styles/home.css";
import {Card} from "../component/card"
import { Navbar } from "../component/navbar";
import {Context} from "../store/appContext";

 
export const Home = () => (
<div>
	

	<div className="container d-flex">

		<div className="row">

		<Card/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		

		</div>
	</div>
</div>
	
);
