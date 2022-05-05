import React, {useContext} from "react";
import "../../styles/home.css";
import {CardPlanetas} from "../component/cardPlanetas"
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

 
export const HomePlanetas = () => {
	
	const {store, action} = useContext(Context);

		return <div className="pagina">
	

			<div className="container d-flex">
				<div className="row">

				{
				store.planets.map((obj,i)=>{
					
				return <CardPlanetas name={obj.name} key={i} diameter={obj.diameter} poblacion={obj.population} peso={obj.mass}/> 
					})
				}
							
				</div>
		
	</div>
</div>
	
}
