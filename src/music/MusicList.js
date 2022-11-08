import React, { useState, useEffect, useRef } from "react";
import "./music.css";

export default function MusicList(props) {
  let tracksEls = props.tracks.map((track) => (
    <div
      key={track.id}
      className={props.curPlaying.id == track.id ? "active" : ""}
      onClick={() => {
        props.onSelected(track.id);
      }}
    >
      {track.title}
    </div>
  ));

  return <div>{tracksEls}</div>;
}
