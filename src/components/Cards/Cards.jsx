import React from 'react';
import './cards.css';

export default function Cards() {
    return (
        <div className='cards'>
            <p className='cards_title'>Список всех найденных курсов:</p>
            <div className='cards_list'>
                <div className='card'>
                    <div className='card_background'></div>
                    <p className='card_title'>Математические методы для разработчиков</p>
                    <a href="#">
                        <span className="link"></span>
                    </a>
                </div>
                <div className='card'>
                    <div className='card_background'></div>
                    <p className='card_title'>Экономические и гуманитарные аспекты информационных технологий</p>
                    <a href="#">
                        <span className="link"></span>
                    </a>
                </div>
                <div className='card'>
                    <div className='card_background'></div>
                    <p className='card_title'>Базовая архитектура программного обеспечения</p>
                    <a href="#">
                        <span className="link"></span>
                    </a>
                </div>
                <div className='card'>
                    <div className='card_background'></div>
                    <p className='card_title'>Профессиональный курс. Спецкурс 1</p>
                    <a href="#">
                        <span className="link"></span>
                    </a>
                </div>
                <div className='card'>
                    <div className='card_background'></div>
                    <p className='card_title'>Профессиональный курс. Спецкурс 2</p>
                    <a href="#">
                        <span className="link"></span>
                    </a>
                </div>
                <div className='card'>
                    <div className='card_background'></div>
                    <p className='card_title'>Математические методы для разработчиков 1</p>
                    <a href="#">
                        <span className="link"></span>
                    </a>
                </div>
            </div>
        </div>
    );
}
