import React from 'react';
import './cards.scss';
import { courses } from './../../mocks/courses';
import CardRowView from './Card/CardRowView/CardRowView';
import CardColumnView from './Card/CardColumnView/CardColumnView';

export default function Cards() {
  const [isRowView, setIsRowView] = React.useState(true);

  const setRowView = () => {
    setIsRowView(true);
  };

  const setColumnView = () => {
    setIsRowView(false);
  };

  return (
    <div className="cards">
      <div className="cards_title_container">
        <p className="cards_title">Список всех найденных курсов:</p>
        <div className="cards_view">
          <img
            src="img/row-view.svg"
            alt="row view"
            className={isRowView && 'active_view'}
            onClick={setRowView}
          />
          <img
            src="img/column-view.svg"
            alt="column view"
            className={!isRowView && 'active_view'}
            onClick={setColumnView}
          />
        </div>
      </div>
      {isRowView ? (
        <div className="cards_row_view">
          {courses.map((course) => (
            <CardRowView course={course} />
          ))}
        </div>
      ) : (
        <div className="cards_column_view_container">
          <div className="cards_column_view">
            {courses.map((course) => (
              <CardColumnView course={course} />
            ))}
          </div>
          <div className="info_about_course"></div>
        </div>
      )}
    </div>
  );
}
