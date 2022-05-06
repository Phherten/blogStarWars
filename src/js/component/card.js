import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const Card = (props)=>{
const {store, action} = useContext(Context);
const fotos = [
    "https://elcomercio.pe/resizer/Eq-puOe0SLcf7RASNVgPzE-BDTM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4AEQDOF6GVA3FHVR2J7MTIERUA.jpg",
    "https://wipy.tv/wp-content/uploads/2020/09/pierna-plateada-de-c3po-1200x720.jpg",
    "https://s1.eestatic.com/2017/06/29/cultura/cine/star_wars-george_lucas-peliculas_227488145_37888495_1706x960.jpg",
    "https://media.vandalsports.com/i/640x360/11-2020/202011910389_1.jpg",
    "https://img.europapress.es/fotoweb/fotonoticia_20170807115025_420.jpg",
    "https://sm.askmen.com/askmen_in/topten/o/owen-lars/owen-lars_qt6s.jpg",
    "https://espanol.news24viral.com/wp-content/uploads/2022/02/1644185934_339_Ya-hemos-perdido-demasiados-actores-de-Star-Wars.jpg",
    "https://cdn-3.expansion.mx/dims4/default/8725a30/2147483647/strip/true/crop/800x420+0+0/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F3e%2F7e%2F73870b3249209a6e32e4948ee938%2Fdroide-star-wars-1.jpg",
    "https://elglado.files.wordpress.com/2015/05/biggs-darklighter.png",
    "https://sm.ign.com/ign_es/gallery/o/obi-wans-g/obi-wans-greatest-moments_u1hg.jpg"
]
return <div key={props.key} className = "col-xl-3 col-md-4 col-12 col-sm-6 p-1 d-flex justify-content-center">


            <div className="card" style={{width: "250px"}}>
                <img src={fotos[props.i]} className="card-img-top" alt="..."/>
                <div className="card-body bg-dark text-light">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Genero: {props.gender}</p>
                    <p className="card-text">Altura: {props.altura}</p>
                    <p className="card-text">Peso: {props.key}</p>
                    <div className="pie d-flex">
                    <a href="#" className="btn btn-secondary">Leer más</a>
                    <i class="fas fa-jedi"></i>
                    </div>
                    
                </div>
            </div>
        </div>

}


