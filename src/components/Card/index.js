import React from 'react';

import './styles.css';

const Card = ({property}) => {
    const { index, picture, shortDesc } = property;

    return (
        <div id={`card-${index}`} className="">
            <img className="" src={picture} alt={shortDesc} width="150px" height="100px"></img>
        </div>
    )
}

export default Card;