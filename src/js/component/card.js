import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const Card = (props)=>{
const {store, action} = useContext(Context);

return <div key={props.key} className = "col-xl-3 col-md-4 col-12 col-sm-6 p-1 d-flex justify-content-center">

            <div className="card" style={{width: "250px"}}>
                <img src="https://elcomercio.pe/resizer/Eq-puOe0SLcf7RASNVgPzE-BDTM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4AEQDOF6GVA3FHVR2J7MTIERUA.jpg" className="card-img-top" alt="..."/>
                <div className="card-body bg-dark text-light">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.gender}</p>
                    <p className="card-text">{props.planeta}</p>
                    <a href="#" className="btn btn-secondary">Leer más</a>
                </div>
            </div>
        </div>

}


