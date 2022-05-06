import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"



export const PlanetIndividual = (props)=>{
const {store, action} = useContext(Context);

return(
<div className="container-fluid m-3 text-white">
        <div className="row">
            <div className="col-md-5 ">
                <img src={store.fotosPlanetas[props.planeta]} className="mt-5 img-fluid img-thumbnail rounded mx-auto d-block fotoIndividual" />
            </div>
            <div className="ficha col-md-6 m-5 bg-dark p-5 rounded text-white">
            <h1 className="display-4">{store.planets[props.planeta].name}</h1>
                    
                    <hr className="my-4"/>
                    <p>Periodo rotacional: {store.planets[props.planeta].rotation_period}</p>
                    <p>Diametro: {store.planets[props.planeta].diameter}</p>
                    <p>Clima: {store.planets[props.planeta].climate}</p>
                    <p>Gravedad: {store.planets[props.planeta].gravity}</p>
                    <p>Terreno: {store.planets[props.planeta].terrain}</p>
                    <p>Poblacion: {store.planets[props.planeta].population}</p>
                    <p>Superficie de Agua: {store.planets[props.planeta].surface_water}</p>
        
                    <Link to={'/demo'} >
                        <button className="btn btn-secondary">Volver</button>
                    </Link>
            </div>
              
                   
        </div>
    </div>
)}