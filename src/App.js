import React from 'react'
import {useState, useEffect} from 'react'
import Context from './Context'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Favourites from './views/Favourites'
import Home from './views/Home'



export default function App() {
  const [pictures, setPictures] = useState([]);

  const defaultEndpoint= "/fotos.json";

  const galleryPictures = async() => {
    const response = await fetch(defaultEndpoint);
    const data = await response.json();
    let filteredData = data.photos.map((e) => ({
      id: e.id,
      src: e.src.medium,
      desc: e.alt,
      favourite: false
    }));
    setPictures(filteredData);
  };

  useEffect(() => {
    galleryPictures();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{pictures, setPictures}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>

  );
  

}