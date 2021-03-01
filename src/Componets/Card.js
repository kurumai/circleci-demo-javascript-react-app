import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({ cards }) => {
    console.log({cards})

    return (
        <div className="row">
       {cards.map((card) => (
            <span key={card.id}>
                { card.data.crosspost_parent == null && card.data.media == null && card.data.url.endsWith(".jpg")? 
                <div className="card mb-4">
                    <img src={ card.data.url } alt="" width="400px" height="300px"/>
                </div>
                : ""
                }
            </span>
       ))}
       </div>
    )
}

Cards.propTypes = {
    cards: PropTypes.object
};

export default Cards