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
				store.persons.map((obj,i)=>{
					
				return <Card name={obj.name} key={i} gender={obj.gender}/> 
					})
				}
							
				</div>
		
	</div>
</div>
	
}
