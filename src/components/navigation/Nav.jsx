import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

function Navbar() {
    return (
        <nav>
            <div className="nav__links">
                <ul className="nav__links__list">

                   <Link to="/"> <li>Início</li></Link>
                    <Link to="/books"><li>Livros</li></Link>
                    <Link to="/about"> <li>Sobre</li> </Link>
                    <Link to="/godfather"><li>Apadrinhe uma criança</li></Link>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
