import React from 'react'
import './cards.css'

function Cards(props) {
    return (
        <div className="cards">
            <div className="cards__image">
                <img src={props} alt="" />                
            </div>
            <div className="cards__desccription">
                <h3>{props.title}</h3>
                <p>{props.author}</p>
                <p>{props.age}</p>
            </div>
        </div>
    )
}

export default Cards
