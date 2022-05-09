import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

export const Card = (props)=>{
const {store, actions} = useContext(Context);
const [like,setLike] = useState ("")
useEffect(()=>store.favoritos.some((object) => object.name === props.name) ? setLike("favorito") : setLike(""),[])
return <div key={props.key} className = "col-xl-3 col-md-4 col-12 col-sm-6 p-1 d-flex justify-content-center">


            <div className="card" style={{width: "250px"}}>
                <img src={store.fotos[props.i]} className="card-img-top" alt="..."/>
                <div className="card-body bg-dark text-light">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Genero: {props.gender}</p>
                    <p className="card-text">Altura: {props.altura}</p>
                    <p className="card-text">Peso: {props.peso}</p>
                    <div className="pie d-flex">
                    <Link to={'/single/'+props.i} >
                        <button className="btn btn-secondary">+ Info</button>
                    </Link>
                    <i className= {like == "" ?
                                "fab fa-jedi-order fa-2x ms-auto" :
                                "fab fa-jedi-order fa-2x ms-auto like"} 
                        onClick={() => {
                                like == "" ? (setLike("favorito"),
                                actions.addFav({name:props.name,indice:props.i,tipo:"/single/"})):(actions.removeFav(props.name),
                                setLike(""))
                                }}     
                                >

                    </i>
                    
                    </div>
                    
                </div>
            </div>
        </div>

}


