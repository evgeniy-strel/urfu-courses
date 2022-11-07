import React from 'react';
import CourseBlock from './CourseBlock/CourseBlock';
import './sidebar.css';

const Sidebar = () => {
  const [activeCourse, setActiveCourse] = React.useState(null);
  const [activeSemestr, setActiveSemestr] = React.useState(null);
  const listCourses = [1, 2, 3, 4];
  const emojyCourses = ['👶', '👦', '🧔', '👴'];

  return (
    <div className="sidebar">
      <p className="sidebar_title">URFU Courses</p>
      {listCourses.map((numberCourse) => (
        <CourseBlock
          numberCourse={numberCourse}
          emojy={emojyCourses[numberCourse - 1]}
          isActiveCourse={activeCourse === numberCourse}
          setActiveCourse={setActiveCourse}
          numberActiveSemestr={activeSemestr}
          setActiveSemestr={setActiveSemestr}
        />
      ))}
    </div>
  );
};

export default Sidebar;