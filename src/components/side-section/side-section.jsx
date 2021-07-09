import React from 'react'
import './side-section.css'

function SideSection(props) {
    return (
        <section className="side-section__container">
            <h1 className="side-section__container__title">{props.title}</h1>
            <p className="side-section__container__content">{props.content}</p>
        </section>
    )
}

export default SideSection