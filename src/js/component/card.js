import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const Card = (props)=>{
const {store, action} = useContext(Context);

return <div className = "col-xl-3 col-md-4 col-12 col-sm-6 p-1 d-flex justify-content-center">

            <div className="card" style={{maxWidth: "250px"}}>
                <img src="" className="card-img-top" alt="..."/>
                <div className="card-body bg-light">
                    <h2 className="card-title">{props.name}</h2>
                    <p className="card-text">{props.gender}</p>
                    <p className="card-text">{props.especie}</p>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
        </div>

}


