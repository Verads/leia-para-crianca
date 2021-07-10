import React, { useEffect, useState } from 'react'

import Cards from '../../components/cards/cards'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navigation/Nav'
import Search from '../../assets/search.svg'

import './books.css'

import api from '../../services/api'

function Books() {

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
    const [filtering, setFiltering] = useState([])


    useEffect(() => {
        async function loadBooks() {
            const response = await api.get('/books/')
            const data = await response.data
            setBooks(data)

        }
        loadBooks()
    }, [])

    useEffect(() => {
        setFiltering(
            books.filter(book => {
                return book.name.includes(search) || book.author.includes(search)
            })
        )
    }, [search, books])

    return (
        <>
            <Navbar />
            <main className="main__books">
                <div className="search-books">
                    <div className="search-books__container">
                        <input className="search-books__input" type="text" placeholder="Procure pelo nome do livro..." onChange={e => { setSearch(e.target.value) }} />
                        <button className="search-books_btn-img" >
                            <img src={Search} alt="" />
                        </button>
                    </div>
                </div>
                <div className="main__books-cards">
                    {filtering.map(book => {
                        return (
                            <Cards title={book.name} author={book.author} key={book.id} age={book.indicated} />
                        )
                    })}
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Books
