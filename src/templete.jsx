import React from 'react';

export default function Cards(props) {
    return (
        <div className='Card'>
            <div className="left-section">
                <img src={`../image/${props.img}`} className="Cover" alt={props.Title} />
                <h2 className='Title'>{props.Title}</h2>
            </div>
            <img src="/image/ezgif-1-6601259391.jpg" className="LocaLogo" alt="Location Logo" />
            <div className='details'>
                <p className='location'>{props.location}</p>
                <div className="Dates">
                    <p className='startD'>From: {props.startd}</p>
                    <p className='endD'>To: {props.endd}</p>
                </div>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    );
}
