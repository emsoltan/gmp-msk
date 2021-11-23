import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import MyContext from "../../context/MyContext";
import Album from "../pages/album/Album";
import LoginForm from "../../components/pages/account/loginform/LoginForm";
const Modal = (props) => {
  const context = useContext(MyContext);
  const { siteData, addToCart } = context;
  const releases = siteData[0].releases;
  const albumTracks = siteData[1].album.tracks.map((track, index) => (
    <li key={index}>
  
      <a href={track.url} target="_blank">
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
        <a>Add to Cart</a>
        {/* <Link to={url} key={id}></Link> */}
      </button>
      <button onClick={confirmHandler}>Back to Library</button>
    </div>
  );
};

export default Modal;
