import React, { useState, useContext } from "react";
import MyContext from "../../../context/MyContext";
import Album from "../album/Album";
import Modal from "../../ui/Modal";
import Backdrop from "../../ui/Backdrop";
import "./Library.css";
const Library = () => {
  const context = useContext(MyContext);
 const {siteData} = context;
  const [modal, setModal] = useState(false);

  const albumArt = siteData[0].albumArt
  // const albumImage = albumArt.map(item=>item)
  const art = siteData[0].albumArt
  const albumImage = function (){
    for (let i = 0; i < art.length; i++) {
      // return siteData[0].releases[i].image;
    console.log(art[i].image);
      return <img src={art[i].image} />;
   
    }
  }
  console.log()
  // albumImage()
 
  const deleteHandler = () => {
    setModal(true);
  };
  const closeModalHandler = () => {
    setModal(false);
  };
  const getAlbum = siteData[0].releases.map((album, index) => (
    <li key={index}>
      {albumImage()}
      <h3>{album.albumName}</h3>
      <div className="actions">
        <button  onClick={deleteHandler}>
          Check Tracks
        </button>
      </div>
    </li>
  ));

  return (
    
      <div className="library_view">
        <h2 className="library_title">Beats Library</h2>
      <ul className="album_view">{getAlbum}</ul>
    
        {modal && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}>
            <Album />
          </Modal>
        )}
        {modal && <Backdrop onClick={closeModalHandler} />}
      </div>
    
  );
};

export default Library;
