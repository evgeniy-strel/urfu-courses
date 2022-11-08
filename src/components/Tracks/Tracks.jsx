import React from "react";
import "./tracks.css";

export default function Tracks() {
    return (

        <div className="tracks">
            <p className="tracks_title">Список всех найденных треков с названием “методы” на 5 семестре:</p>
            <div className="track_list">

                <div className="track">
                    <div className="track_title">
                        <p>Методы оптимальных решений</p>
                    </div>
                    <div className="track_bar">
                        <Progress done="70"/>
                    </div>
                </div>

                <div className="track">
                    <div className="track_title">
                        <p>Методы оптимизации</p>
                    </div>
                    <div className="track_bar">
                        <Progress done="70"/>
                    </div>
                </div>

                <div className="track">
                    <div className="track_title">
                        <p>Методы операционных систем в разработке программного обеспечения (Онлайн, МИФИ, ОК)</p>
                    </div>
                    <div className="track_bar">
                        <Progress done="70"/>
                    </div>
                </div>

                <div className="track">
                    <div className="track_title">
                        <p>Правовые методы интеллектуальной собственности (Онлайн, ИТМО, ОК)</p>
                    </div>
                    <div className="track_bar">
                        <Progress done="70"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

const Progress = ({done}) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 1000);

    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {done}%
            </div>
        </div>

    )

};
