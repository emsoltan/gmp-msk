import React, {useContext} from "react";
import {Link}from "react-router-dom"
import "./Modal.css";
import MyContext from "../../context/MyContext"
import Album from "../pages/album/Album";
import LoginForm from "../../components/pages/account/loginform/LoginForm"
const Modal = (props) => {
  const context = useContext(MyContext);
  const {siteData}= context;
  const url = siteData[0].releases[0].url;
  const id = siteData[1].album.id;

  const albumTracks = siteData[1].album.tracks.map((track,id ) => (
    <li> <a href={track.url} target="_blank">{track.trackName}</a></li>
  ));
  const confirmHandler = () => {
    props.onConfirm();
  };

  const cancelHandler = () => {
    props.onCancel();
  };
  return (
    <div className="modal">
      <ul>{albumTracks}</ul>
      <button onClick={cancelHandler}>
        <a >Visit Album</a>
        {/* <Link to={url} key={id}></Link> */}
      </button>
      <button onClick={confirmHandler}>Back to Library</button>
    </div>
  );
};

export default Modal;
