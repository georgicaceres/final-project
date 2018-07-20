import React from 'react';
import { Link } from 'react-router-dom';

const ErrorScreen = ({response}) => {
    if (!response) return <div/>
    return (
        <div className="errorScreen">
            <h1>{response.status}</h1>
            <p className='status'>{response.statusText}</p>
            <hr/>
            <p>Lo sentimos, no encontramos los que buscabas, intentalo nuevamente!</p>
            <Link to={'/'} className='home-btn-link'>
                <button className='btn home-btn'>HOMEPAGE</button>
            </Link>
        </div>
    );
};

export default ErrorScreen
