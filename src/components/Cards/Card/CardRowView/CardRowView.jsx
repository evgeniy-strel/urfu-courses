import React from 'react';
import './card_row_view.scss';
import { gradients, getRandomGradient } from './../../../../gradients/gradients';

// обсудить градиенты карточек при отсутствии картинок: все единым градиентом или берется из базы

const getBackgroundStyles = (course) => {
  if (course.bgImg) {
    return `url(${course.bgImg})`;
  }
  return gradients[0];
};

const CardRowView = ({ course }) => {
  return (
    <>
      <div className="card_row_view" key={course.id}>
        <div
          className="card_row_view_background"
          style={{
            background: getBackgroundStyles(course),
            backgroundSize: 'cover',
          }}></div>
        <p className="card_row_view_title">{course.title}</p>
      </div>
    </>
  );
};

export default CardRowView;
