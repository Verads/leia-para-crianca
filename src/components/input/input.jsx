import React from 'react'
import Search from '../../assets/search.svg'
import './input.css'

function Input() {
    return (
        <div className="search-books">
            <div className="search-books__container">
                <input className="search-books__input" type="text" placeholder="Procure pelo nome do livro..." />
                <button className="search-books_btn-img" >
                    <img src={Search} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Input
