import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';


export const CardPlanetas = (props)=>{
const {store, action} = useContext(Context);

return <div key={props.key} className = "col-xl-3 col-md-4 col-12 col-sm-6 p-1 d-flex justify-content-center">

            <div className="card" style={{width: "250px"}}>
                <img src={store.fotosPlanetas[props.i]} className="card-img-top" alt="..."/>
                <div className="card-body bg-dark text-light">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Diametro: {props.diameter}</p>
                    <p className="card-text">Poblacion: {props.poblacion}</p>
                    <p className="card-text">Clima: {props.clima}</p>
                    <div className="pie d-flex">
                    <Link to={'/planetasSingle/'+props.i} >
                        <button className="btn btn-secondary">+ Info</button>
                    </Link>
                    <i className="fab fa-jedi-order fa-2x ms-auto"></i>
                    
                    </div>
                </div>
            </div>
        </div>

}
