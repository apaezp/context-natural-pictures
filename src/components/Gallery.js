import React from 'react'
import Heart from "./Heart"
import {useContext} from "react"
import Context from "../Context"
import "../assets/css/gallery.css"


export default function Gallery() {
    const {pictures, setPictures} = useContext(Context);

    const setFavourite = (id) => {
        const photoIndex = pictures.findIndex((e) => e.id === id);
        pictures[photoIndex].favourite = !pictures[photoIndex].favourite;
        setPictures([...pictures]);

    };

    return (
        <div className="gallery main_5 p-3">
            {pictures.map((e, i) => (
                <div onClick = {() => setFavourite(e.id)} className="photo" style= {{backgroundImage: `url(${e.src})`}} key={i}>
                    <Heart selected={e.favourite} />
                    <p className="gallery__item__desc">{e.desc}</p>
                </div>
            ))}
        </div>
    )
}

