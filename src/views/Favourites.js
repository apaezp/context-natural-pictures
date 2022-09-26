import React from 'react'
import Context from '../Context'
import {useContext} from 'react'
import '../assets/css/gallery.css'



export default function Home() {
    const {pictures, setPictures} = useContext(Context);

    const deleteFavourite = (id) => {
        const photoIndex = pictures.findIndex((e) => e.id === id);
        pictures[photoIndex].favourite = !pictures[photoIndex].favourite;
        setPictures([...pictures]);

    };

    return  (
        <div className="Home">
            <h1 className="title"> Natural Pictures</h1>
            <div className="gallery favourite_main__4 p-3">
                {pictures.filter((e) => e.favourite).map((e, i) => (
                    <div onClick = {() => deleteFavourite(e.id)} className="gallery__item" style= {{backgroundImage: `url(${e.src})`}} key={i}>
                        <p className="gallery__item__desc">{e.desc}</p>
                    </div>
                ))}
            </div>

        </div>

    );
}