import React from 'react';
import { withRouter, Link} from 'react-router-dom'

function Details(props) {
    console.warn(props);
    return (
        <div className="details">
            <img src={`https://robohash.org/${props.match.params.id}`} alt={props.name} />
            <div>
                <h3>{props.match.params.name}</h3>
                <span>{props.match.params.username}<br />
                    {props.match.params.phone}<br />
                    {props.match.params.email}<br />
                    {props.match.params.website}<br/><br/>
                </span>
                <Link to="/" className='lien'>retour</Link>

            </div>
        </div>
    );
}

export default withRouter(Details);