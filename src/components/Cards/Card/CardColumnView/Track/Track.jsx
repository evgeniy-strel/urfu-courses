import React from 'react';
import './track.scss';

const Track = ({ track }) => {
  return (
    <div className="track_for_course">
      <div className="left">
        <p className="title">{track.title}</p>
      </div>
      <div className="right">
        <div className="bar">
          <div className="bar_percent"></div>
        </div>
        <p className="rating">{track.rating}</p>
      </div>
    </div>
  );
};

export default Track;
