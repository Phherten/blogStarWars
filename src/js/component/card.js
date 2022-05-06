import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

export const Card = (props)=>{
const {store, action} = useContext(Context);

return <div key={props.key} className = "col-xl-3 col-md-4 col-12 col-sm-6 p-1 d-flex justify-content-center">


            <div className="card" style={{width: "250px"}}>
                <img src={store.fotos[props.i]} className="card-img-top" alt="..."/>
                <div className="card-body bg-dark text-light">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Genero: {props.gender}</p>
                    <p className="card-text">Altura: {props.altura}</p>
                    <p className="card-text">Peso: {props.key}</p>
                    <div className="pie d-flex">
                    <Link to={'/single/'+props.i} >
                        <button className="btn btn-secondary">+ Info</button>
                    </Link>
                    
                    </div>
                    
                </div>
            </div>
        </div>

}


