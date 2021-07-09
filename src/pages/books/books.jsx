import React, { useEffect, useState } from 'react'

import Cards from '../../components/cards/cards'
import Footer from '../../components/footer/footer'
import Input from '../../components/input/input'
import Navbar from '../../components/navigation/Nav'

import './books.css'

import api from '../../services/api'

function Books() {

    const [ books, setBooks ] = useState([])


    useEffect(() => {
        async function loadBooks(){
            const response = await api.get('/books/')
            const data = await response.data
            setBooks(data)
            
        }
        loadBooks()
    }, [])

    return (
        <>
            <Navbar />
            <main className="main__books">
                <Input />
                <div className="main__books-cards">
                {books.map(book => {
                    return(
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
