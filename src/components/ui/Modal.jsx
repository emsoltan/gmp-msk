import React, { useContext } from "react";

import "./Modal.css";
import MyContext from "../../context/MyContext";
import { Link } from "react-router-dom";

const Modal = (props) => {
  const context = useContext(MyContext);
  const { siteData, addToCart } = context;
 
  const albumTracks = siteData[1].album.tracks.map((track, index) => (
    <li key={index}>
      <a href={track.url} target="_blank" rel="noreferrer">
        {track.trackName}
      </a>
    </li>
  ));
  console.log(albumTracks)
  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <div className="modal">
      <ul>{albumTracks}</ul>
      <button onClick={()=>addToCart()}>
        <Link to="">Add to Cart</Link>
     
      </button>
      <button onClick={confirmHandler}>Back to Library</button>
    </div>
  );
};

export default Modal;
