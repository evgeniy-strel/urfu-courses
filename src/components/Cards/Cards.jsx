import React from 'react';
import './cards.css';

export default function Cards() {
  return (
    <div className='cards'>
      <p className='cards_title'>Список всех найденных курсов:</p>
      <div className='cards_list'>
        <div className='card'>
          <div className='card_background'></div>
          <div className='card_title'>
            <p>Математические методы для разработчиков</p>
          </div>
        </div>
        <div className='card'>
          <div className='card_background'></div>
          <div className='card_title'>
            <p>
              Экономические и гуманитарные аспекты информационных технологий
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card_background'></div>
          <div className='card_title'>
            <p>Базовая архитектура программного обеспечения</p>
          </div>
        </div>
        <div className='card'>
          <div className='card_background'></div>
          <div className='card_title'>
            <p>Профессиональный курс. Спецкурс 1</p>
          </div>
        </div>
        <div className='card'>
          <div className='card_background'></div>
          <div className='card_title'>
            <p>Профессиональный курс. Спецкурс 2</p>
          </div>
        </div>
        <div className='card'>
          <div className='card_background'></div>
          <div className='card_title'>
            <p>Математические методы для разработчиков 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
