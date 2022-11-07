import React from "react";
import "./tracks.css";

export default function Tracks() {
  return (
    <div class="track-list">
      <div class="track">
        <div class="track_title">
          <p>Трек по хуйне 1</p>
        </div>
        <div className="track_bar">
          <Progressbar progress="100" />
        </div>
      </div>
    </div>
  );
}

const Progressbar = ({ progress }) => {
  const Parentdiv = {
    height: "15",
    width: "100%",
    borderRadius: 40,
    margin: 50,
    backgroundColor: "red",
  };
  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "rgb(209, 238, 255)",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "white",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};
