import React from 'react';
import './card_column_view.scss';
import Track from './Track/Track';

const CardColumnView = ({ course }) => {
  const [areShownTracks, setAreShownTracks] = React.useState();

  const handleClickArrow = () => {
    setAreShownTracks((prevValue) => !prevValue);
  };

  return (
    <div className={`card_column_view ${areShownTracks ? 'show_tracks' : ''}`} key={course.id}>
      <div className="course_container">
        <div className="course">
          <p className="title">{course.title}</p>
          <img src="img/arrow-bottom.svg" alt="show tracks" onClick={handleClickArrow} />
        </div>
        {areShownTracks && (
          <div className="tracks">
            {course.tracks.map((track) => (
              <Track track={track} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardColumnView;
