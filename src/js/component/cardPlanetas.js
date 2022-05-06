import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const CardPlanetas = (props)=>{
const {store, action} = useContext(Context);
const fotos = [
    "https://icdn.dtcn.com/image/digitaltrends_es/star-wars-the-lars-homestead-at-tatooine.jpg",
    "https://static.wikia.nocookie.net/esstarwars/images/e/ec/Ciudad_Aldera_en_Alderaan.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Tikal_temples_1_2_3_5_2009.JPG",
    "https://frikipolis.com/wp-content/uploads/2021/07/unnamed-file-54.jpg",
    "https://i.pinimg.com/originals/62/c1/bd/62c1bd67d39cdcf4d507f16b35f90f4f.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/29/401/231/space-science-fiction-bespin-wallpaper-preview.jpg",
    "https://cdna.artstation.com/p/assets/images/images/017/463/798/large/simon-edwards-highresscreenshot000031.jpg",
    "https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg",
    "https://static.wikia.nocookie.net/esstarwars/images/6/66/Coruscant_landscape_RotS.png",
    "https://pm1.narvii.com/6594/9a9044c1ef56788efcbe4b4015043a306b49ece6_hq.jpg"
];
return <div key={props.key} className = "col-xl-3 col-md-4 col-12 col-sm-6 p-1 d-flex justify-content-center">

            <div className="card" style={{width: "250px"}}>
                <img src={fotos[props.i]} className="card-img-top" alt="..."/>
                <div className="card-body bg-dark text-light">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Diametro: {props.diameter}</p>
                    <p className="card-text">Poblacion: {props.poblacion}</p>
                    <p className="card-text">Clima: {props.clima}</p>
                    <a href="#" className="btn btn-secondary">Leer más</a>
                </div>
            </div>
        </div>

}
