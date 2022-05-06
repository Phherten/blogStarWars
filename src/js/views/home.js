import React, {useContext} from "react";
import "../../styles/home.css";
import {Card} from "../component/card"
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
 
export const Home = () => {
	
	const {store, action} = useContext(Context);

		return <div className="pagina">
	

			<div className="container d-flex">
				<div className="row">

				{
				store.persons.map((obj,index)=>{
					
				return <Card name={obj.name} i={index} gender={obj.gender} altura={obj.height} peso={obj.mass}/> 
					})
				}
							
				</div>
		
	</div>
</div>
	
}
