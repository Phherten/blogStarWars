import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const Card = (props)=>{
//const {store, action} = useContext(Context);

return <div className = "col-xl-3 col-md-4 col-12 col-sm-6 p-2">

<div className="card" style={{maxWidth: "200px"}}>
<img src="..." className="card-img-top" alt="..."/>
<div className="card-body">
  <h3 className="card-title">Pablo</h3>
  <p className="card-text">180</p>
  <a href="#" className="btn btn-primary">Leer más</a>
</div>
</div>
</div>

}


