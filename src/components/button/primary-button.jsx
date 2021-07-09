import React from 'react'
import './primary-button.css'

function PrimaryButton(props) {
    return (
        <button className="primary-button">
            <p>{props.title}</p>
        </button>
    )
}

export default PrimaryButton
