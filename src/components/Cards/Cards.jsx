import React from 'react';
import './cards.css';
import { courses } from './../../mocks/courses';
import { gradients, getRandomGradient } from './../../gradients/gradients';

// обсудить градиенты карточек при отсутствии картинок: все единым градиентом или берется из базы

const getBackgroundStyles = (course) => {
  if (course.bgImg) {
    return `url(${course.bgImg})`;
  }
  return gradients[0];
};

export default function Cards() {
  return (
    <div className='cards'>
      <p className='cards_title'>Список всех найденных курсов:</p>
      <div className='cards_list'>
        {courses.map((course) => (
          <>
            <div className='card' key={course.id}>
              <div
                className='card_background'
                style={{
                  background: getBackgroundStyles(course),
                  backgroundSize: 'cover',
                }}></div>
              <p className='card_title'>{course.title}</p>
              {/* <a href="#">
                        <span className="link"></span>
                    </a> */}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
