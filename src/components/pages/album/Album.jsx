import React, { useContext } from "react";
import MyContext from "../../../context/MyContext";

const Album = () => {
  const context = useContext(MyContext);
  const { siteData } = context;
  const albumTracks = siteData[1].album.tracks.map((track) =>
    console.log(track.trackName)
  );
  return (
    <ul>
      <li>{albumTracks}</li>
    </ul>
  );
};

export default Album;
