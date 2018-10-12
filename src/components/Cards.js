import React from 'react'

const Card = ({name,email,id}) => {
    return (
        <div className="tc bg-light-green br3 pa3 ma2 grow bw2 shadow-2">
            <img src={`https://robohash.org/${id}`} alt="robots"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
};

export default Card