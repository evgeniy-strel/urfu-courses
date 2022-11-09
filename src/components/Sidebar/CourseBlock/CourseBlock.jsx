import React from 'react';

const CourseBlock = ({
  numberCourse,
  emojy,
  isActiveCourse,
  setActiveCourse,
  numberActiveSemestr,
  setActiveSemestr,
}) => {
  const onClickNumberCourse = () => {
    setActiveCourse((prevValue) =>
      prevValue == numberCourse ? null : numberCourse
    );
  };

  const onClickNumberSemestr = (numberSemestr) => {
    setActiveSemestr(numberSemestr);
  };

  const listSemestr = [numberCourse * 2 - 1, numberCourse * 2];

  return (
    <div className={`number_course first_course ${isActiveCourse && 'active'}`}>
      <div className='container_title_course' onClick={onClickNumberCourse}>
        <p className='title_course'>
          <span className='emojy_course'>{emojy}</span>
          {numberCourse} курс
        </p>
      </div>
      {isActiveCourse && (
        <>
          {listSemestr.map((numberSemestr) => (
            <div
              className={`container_number_semestr ${
                numberActiveSemestr == numberSemestr && 'active'
              }`}
              onClick={() => onClickNumberSemestr(numberSemestr)}>
              <p className='number_semester'>{numberSemestr} семестр</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CourseBlock;
