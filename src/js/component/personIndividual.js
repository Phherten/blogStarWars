import React, { useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"
 
export const PersonaIndividual = (props)=>{
const {store, action} = useContext(Context);

return(
<div className="container-fluid m-5 text-white">
        <div className="row">
            <div className="col-md-5 ">
                <img src={store.fotos[props.persona]} className="mt-5 img-fluid img-thumbnail rounded mx-auto d-block fotoIndividual" />
            </div>
            <div className="ficha col-md-6 m-5 bg-dark p-5 rounded text-white">
            <h1 className="display-4">{store.persons[props.persona].name}</h1>
                    
                    <hr className="my-4"/>
                    <p>Altura: {store.persons[props.persona].height}</p>
                    <p>Peso: {store.persons[props.persona].mass}</p>
                    <p>Color de Pelo: {store.persons[props.persona].hair_color}</p>
                    <p>Color de Piel: {store.persons[props.persona].skin_color}</p>
                    <p>Color de Ojos: {store.persons[props.persona].eye_color}</p>
                    <p>Año de Nacimiento: {store.persons[props.persona].birth_year}</p>
                    <p>Genero: {store.persons[props.persona].gender}</p>
                    <p>Planeta: {store.persons[props.persona].homeworld}</p>
                    <Link to={'/'} >
                        <button className="btn btn-secondary">Volver</button>
                    </Link>
            </div>
              
                   
        </div>
    </div>
)}

