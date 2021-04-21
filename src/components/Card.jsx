import React from 'react';


function Card({id, nom, email}) {
    return (
        <div className='card' >
            <img src={`https://robohash.org/${id}`} alt={nom}/>
            <h3>{nom}</h3>
            <span>{email}</span>
        </div>
    );
}

export default Card;