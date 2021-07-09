import React from 'react'
import PrimaryButton from '../../components/button/primary-button'
import Navbar from '../../components/navigation/Nav'
import Footer from '../../components/footer/footer'
import './about.css'

function About() {
    return (
        <div className="about__container">
            <Navbar />
            <section>
                
                <h1>Sobre o projeto</h1>

                <p>Esse projeto foi realizado como projeto final do bootcamp da Reprograma. A ideia era fazer algo que fosse a cara das alunas. Meu intuito sempre foi ajudar as crianças e ainda assim ter um cunho social. Por acreditar que o incentivo à leitura pode fazer milagres em relação à formação das crianças, engajá-las na leitura e ao estudo desde cedo pode construir um futuro e um presente maravilhosos.</p>

                <p>A ideia, porém, também não é limitada a apenas as crianças de sua própria família. Existem muitas crianças que moram em abrigos e, alguns abrigos e ONGs no Brasil permitem que nós apadrinhemos afetivamente essas crianças, ou seja, sem nenhum vínculo jurídico. </p>

                <h5>Para saber mais, clique no botão abaixo:</h5>

                <PrimaryButton title="Saiba mais" />

            </section>

            <section>
                <h1>Sobre a autora</h1>

                <p>Amazonense, nascida em 1993, no dia dois de abril e mãe de uma menina de um ano de idade. Me chamo Vera e acredito que devemos sempre cuidar da melhor forma possível das nossas crianças. Não devemos tratá-las de forma alguma de uma maneira que não teríamos coragem de tratar um adulto e devíamos tratá-las, inclusive, de uma maneira até melhor, sempre incentivando sua independência e respeitando seu tempo.</p>
            </section>

            <Footer />
        </div>
    )
}

export default About
