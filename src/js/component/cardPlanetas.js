import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const CardPlanetas = (props)=>{
const {store, action} = useContext(Context);

return <div key={props.key} className = "col-xl-3 col-md-4 col-12 col-sm-6 p-1 d-flex justify-content-center">

            <div className="card" style={{width: "250px"}}>
                <img src="https://icdn.dtcn.com/image/digitaltrends_es/star-wars-the-lars-homestead-at-tatooine.jpg" className="card-img-top" alt="..."/>
                <div className="card-body bg-dark text-light">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Diametro: {props.diameter}</p>
                    <p className="card-text">Poblacion: {props.poblacion}</p>
                    <p className="card-text">Peso: {props.peso}</p>
                    <a href="#" className="btn btn-secondary">Leer más</a>
                </div>
            </div>
        </div>

}
