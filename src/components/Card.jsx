import React from 'react';
import {
    Link
} from "react-router-dom";
function Card({ robot }) {


    const { name, email, id, username, phone, website } = robot;
    return (
        <div>
            <div className='card' >
                <img src={`https://robohash.org/${id}`} alt={name} />
                <h3>{name}</h3>
                <span>{email}</span>
                <Link to={"/Details/" + id + "/" + name + "/" + username + "/" + phone + "/" + website + "/" + email} className='lien'>Plus d'infos</Link>
            </div>
        </div>

    );
}

export default Card;