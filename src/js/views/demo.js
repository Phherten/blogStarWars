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
				store.planets.map((obj,index)=>{
					
				return <CardPlanetas name={obj.name} i={index} diameter={obj.diameter} poblacion={obj.population} clima={obj.climate}/> 
					})
				}
							
				</div>
		
	</div>
</div>
	
}
