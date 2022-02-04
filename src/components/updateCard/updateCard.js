import React from 'react';
import './updateCard.scss';

const UpdateCard = props => {
    return (
        <div className="card-holder">
            <div className="date-holder">
                <h4>{props.vDate}</h4>
            </div>
            <div className="developer-holder">
                <div className="type">
                    {props.type}
                </div>
                <div className="dev-name">
                    <img 
                        src={props.image}
                        alt={props.devName} 
                    />
                    <h5>{props.devName}</h5>
                </div>
            </div>
            <div className="text-holder">
                <p>{props.text}</p>
            </div>
            <div className="button-holder">
                <button className="btn">Download</button>
            </div>
        </div>
    );
};

export default UpdateCard;