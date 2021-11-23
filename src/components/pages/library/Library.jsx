import React, { useState, useContext } from "react";
import MyContext from "../../../context/MyContext";
import Album from "../album/Album";
import Modal from "../../ui/Modal";
import Backdrop from "../../ui/Backdrop";
import "./Library.css";
const Library = () => {
  const context = useContext(MyContext);
  const { siteData, addToCart, cartItems } = context;
  const [modal, setModal] = useState(false);
  // const album = siteData[0].releases;
  // const albumArt = siteData[0].albumArt;
  // const releases = siteData[0].releases;

  const deleteHandler = () => {
    setModal(true);
  };
  const closeModalHandler = () => {
    setModal(false);
  };
  const getAlbum = siteData[0].releases.map((album, index) => (
    <li key={index}>
      <img src={album.image} />
      <h3>{album.albumName}</h3>
      <div className="buttons">
        <button className="view-btn" onClick={deleteHandler}>
          View Tracks
        </button>
        <button className="add-btn" onClick={() => addToCart(album)}>
          Add To Cart
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
