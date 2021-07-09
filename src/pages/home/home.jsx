import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/button/primary-button'
import Navbar from '../../components/navigation/Nav'
import SideSection from '../../components/side-section/side-section'
import BookLover from '../../assets/book_lover.svg'

import './home.css'
import Footer from '../../components/footer/footer'

function Home() {
    return (
        <div>
            <Navbar />
            <div className="home__content">
                <div className="home__content__text">
                    <SideSection title="Incentive uma criança" content="Este projeto foi feito com intuito de incentivar a leitura de adultos e crianças com livros infato-juvenis." />
                    <div><Link to="/books"> <PrimaryButton title="Comece já" /> </Link></div>
                </div>
                <div className="home__content__image">
                    <img src={BookLover} alt="Ilustração de uma mulher sentada em livros grandes enquanto lê um livro menor" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
